import "./App.css";
import Footer from "./footer/Footer";
import HamburgerMenu from "./hamburgermenu/HamburgerMenu";
import Header from "./header/Header";
import Home from "./middle/Home";
import ProductInfo from "./middle/ProductInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Home />
        <ProductInfo />
      </div>
      <HamburgerMenu />
      <Footer />
    </div>
  );
}

export default App;
