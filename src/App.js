import "./App.css";



import Middle from "./middle/Middle";
import Header from "./header/Header";

import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>   
        <Header></Header>
      
        <Middle></Middle>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
