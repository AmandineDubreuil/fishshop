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
      data: articles,
      displayFramePanier: false,
      displayFrameRegister: false,
      handleDisplayFrame: this.handleDisplayFrame.bind(this),
    };
  }
  //fin state

  handleDisplayFrame(value) {
    if (value === "Panier") {
      this.setState(() => {
        return {
          displayFramePanier: !this.state.displayFramePanier
        };
      });
    }
  }

  render() {
    return (
      //boutiqueContext doit encadrer tous les éléments qui vont en avoir besoin
      <BoutiqueContext.Provider value={this.state}>
        <Register></Register>
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
