import React from "react";
import Menu from "./components/Menu/Menu";
import CardFrame from "./components/CardFrame/CardFrame";
import Panier from "./components/Panier/Panier";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import BoutiqueContext from "./BoutiqueContext";
import articles from "./articles";
import "./Root.css";

// COMPONENT DE TYPE CLASS SIMPLE si je n'appelle pas la class
// à partir de React.Component, js comprend pas que c'est une classe
class Root extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      // state articles / panier
      data: articles,
      displayFramePanier: false,
      displayFrameRegister: false,
      panier: [],
      totalPanier: 0,
      handleDisplayFrame: this.handleDisplayFrame.bind(this),
      achat: this.achat.bind(this),
      remove: this.remove.bind(this),
      removeAll: this.removeAll.bind(this),

      // state compte user
    };
    //fin state
  }

  handleDisplayFrame(value) {
    if (value === "Panier") {
      this.setState(() => {
        return {
          displayFramePanier: !this.state.displayFramePanier,
        };
      });
    } else if (value === "Connexion") {
      this.setState(() => {
        return {
          displayFrameRegister: !this.state.displayFrameRegister,
        };
      });
    }
  }

  achat(id) {
    if (this.state.data[id].qte > 0) {
      let panierTmp = this.state.panier.sort();
      let dataTmp = this.state.data;
      panierTmp.push(id);
      dataTmp[id].qte -= 1;
      this.setState(() => {
        return {
          panier: panierTmp,
          data: dataTmp,
        };
      });
    }
    this.calculTotal(id, "achat");
    //  console.dir(this.state.panier);
  }

  remove(i, id) {
    console.log(i);
    let panierTmp = this.state.panier.sort();
    let dataTmp = this.state.data;

    panierTmp.splice(i, 1);
    dataTmp[id].qte += 1;

    this.setState(() => {
      return {
        panier: panierTmp,
        data: dataTmp,
      };
    });
    this.calculTotal(id, "remove");
  }

  removeAll(id) {
    let panierTmp = this.state.panier.sort();
    let dataTmp = this.state.data;
    panierTmp.map((value, i) => {
      if (value=== id) {
        dataTmp[id].qte += 1;
        panierTmp.splice(i, 1);
        this.calculTotal(id, "remove");
      }
    });
    // for (let i = 0; panierTmp.length < 0; i++) {
    // }
    this.setState(() => {
      return {
        panier: panierTmp,
        data: dataTmp,
      };
    });
  }

  calculTotal(id, action) {
    let totalPanierTmp = this.state.totalPanier;
    let priceTmp = this.state.data[id].price;
    if (action === "achat") {
      totalPanierTmp += priceTmp;
    } else if (action === "remove") {
      totalPanierTmp -= priceTmp;
    }
    this.setState(() => {
      return { totalPanier: totalPanierTmp };
    });
  }

  render() {
    return (
      //boutiqueContext doit encadrer tous les éléments qui vont en avoir besoin
      <BoutiqueContext.Provider value={this.state}>
        {this.state.displayFrameRegister ? <Register></Register> : <></>}
        {this.state.displayFramePanier ? <Panier></Panier> : <></>}
        <header>
          <Menu></Menu>
        </header>
        <main>
          <CardFrame data={this.state.data}></CardFrame>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </BoutiqueContext.Provider>
    );
  }
}

export default Root;
