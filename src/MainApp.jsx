import React from "react";
import "./MainApp.scss";

import Middle from "./middle/Middle";
import Header from "./header/Header";


import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";

const MainApp = () => {
  return (
    <div id="MainApp" className="wrapper">
      <BrowserRouter>
        <header className="header">
          <Header></Header>
        </header>
        
        <main className="main">
          {" "}
          <Middle></Middle>
        </main>
        <footer class="footer">
          {" "}
          <Footer></Footer>
        </footer>
      </BrowserRouter>
      {/* <header className="header">Header</header>
      <aside className="aside aside-1">Hambergur Menu</aside>
      <main className="main">Main</main>
      <footer class="footer">Footer</footer> */}
    </div>
  );
};
export { MainApp };
