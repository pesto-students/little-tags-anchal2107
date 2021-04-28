import ProductInfo from "./ProductInfo";
import { Link } from "react-router-dom";
import "./Home.scss";
import BestSeller from "./BestSeller";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Online Flee Market for Clothes</h1>
          <h2 className="hero-subtitle">It's Time to recycle</h2>
          <Link to="/products">
            <button type="button" className="hero-button">
              SHOP NOW
            </button>
          </Link>
        </div>
      </section>
      <ProductInfo />
      <BestSeller />
    </div>
  );
}

export default Home;
