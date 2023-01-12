import React from "react";
import Menu from "./components/Menu/Menu";
import CardFrame from "./components/CardFrame/CardFrame";
import Panier from "./components/Panier/Panier";
import Footer from "./components/Footer/Footer";
import articles from "./articles";
import "./Root.css";

// COMPONENT DE TYPE CLASS SIMPLE si je n'appelle pas la class
// à partir de React.Component, js comprend pas que c'est une classe
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: articles,
    };
  }
  render() {
    return (
      <>
        <Panier></Panier>
        <header>
          <Menu></Menu>
        </header>
        <main>
          <CardFrame data={this.state.data}></CardFrame>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </>
    );
  }
}

export default Root;
