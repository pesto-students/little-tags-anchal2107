import "./App.css";
import Middle from "./middle/Middle";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header></Header>
          <Middle></Middle>
          <Footer></Footer>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
