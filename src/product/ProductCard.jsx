import "./ProductCard.scss";

function ProductCard() {
  return (
    <>
      <div className="product-card-container">
        <div>
          <img src="https://via.placeholder.com/600/92c952" alt="imge" height="400" width="300"/>
        </div>
        <div>
          <h2>Faux Leather Jacket</h2>
        </div>
        <div>
          <h3>$ 1200.00</h3>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
