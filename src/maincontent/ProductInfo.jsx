import CategoryCard from "./CategoryCard";
import "./MainContent.scss";

function ProductInfo() {
  return (
    <div className="product-category-home">
      <h2>Most in Demand</h2>
      <div className="grid-container">
        <CategoryCard
          image="https://source.unsplash.com/TwuPHbcQ57w"
          categoryName="Men's clothing"
          category="mens"
        />
        <CategoryCard
          image="https://source.unsplash.com/Kv5WiqG_3NA"
          categoryName="Women's clothing"
          category="womens"
        />
        <CategoryCard
          image="https://source.unsplash.com/s8SJ8pmxPDA"
          categoryName="Jewellery"
          category="jewel"
        />
        <CategoryCard
          image="https://source.unsplash.com/1NbA4Lh7rsg"
          categoryName="Electronics"
          category="electronics"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
