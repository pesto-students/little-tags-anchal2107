import CategoryCard from "./CategoryCard";
import * as CategoryName from "./../constant/categoryRoutes";
import "./MainContent.scss";

function ProductInfo() {
  return (
    <div className="product-category-home">
      <h2>Most in Demand</h2>
      <div className="grid-container">
        <CategoryCard
          image="https://source.unsplash.com/TwuPHbcQ57w"
          categoryName={CategoryName.mensClothing}
          category="mens-clothing"
        />
        <CategoryCard
          image="https://source.unsplash.com/Kv5WiqG_3NA"
          categoryName={CategoryName.womensClothing}
          category="women-clothing"
        />
        <CategoryCard
          image="https://source.unsplash.com/s8SJ8pmxPDA"
          categoryName={CategoryName.jewels}
          category="jewel"
        />
        <CategoryCard
          image="https://source.unsplash.com/1NbA4Lh7rsg"
          categoryName={CategoryName.electronics}
          category="electronics"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
