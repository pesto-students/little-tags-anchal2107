import React, { useState } from "react";
import "./App.scss";
import MainContent from "./maincontent/MainContent";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";
import withAuthentication from '../src/session//Authentications';


function App() {
  const [disabled, setDisabled] = useState(false);
  const ChangeMainContextDisableProperty = (isDisabled) =>{
  setDisabled(isDisabled);
  }
  return (
    <div className="app">
      <BrowserRouter>
        <header className="header">
          <Header onHambergerOpenFunFromApp={ChangeMainContextDisableProperty}/>
        </header>
        <main className="main" style={{
          opacity: disabled ? 0.25 : 1,
          pointerEvents: disabled ? "none" : "initial"
        }}>        
          <MainContent  />
        </main>
        <footer className="footer">
          <Footer /> 
        </footer>
      </BrowserRouter>
    </div>
  );
}

//export default withAuthentication(App);
export default App;
