import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import "./App.css";
import Banner from "./Banner/Banner";
import Why from "./Why/Why";
import Popular from "./Popular/Popular";
import Catalog from "./Catalog/Catalog";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Why />
      <Popular />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
