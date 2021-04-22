import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import MainContent from "./maincontent/MainContent";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";
import withAuthentication from './session/withAuthentication';

function App() {
  const authUser = useSelector((state) => state.sessionState);
  console.log("test: ", authUser.authUser);
  return (
    <div className="app">
      <BrowserRouter>
        <header className="header">
          <Header />
        </header>
        <main className="main">
        {/* {!authUser.authUser && <SignUpModal />} */}
          <MainContent />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default withAuthentication(App);
