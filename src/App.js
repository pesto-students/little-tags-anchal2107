import React from "react";
import "./App.scss";
import MainContent from "./maincontent/MainContent";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header className="header">
          <Header />
        </header>
        <main className="main" >
        
          <MainContent />
        </main>
        <footer className="footer">
          <Footer /> 
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
