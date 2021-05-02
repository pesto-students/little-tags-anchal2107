import CategoryCard from "./CategoryCard";
import "./MainContent.scss";

function ProductInfo() {
  return (
    <div className="product-category-home">
      <h2>CATEGORIES TO BAG</h2>
      <div className="flex flex-wrap h-100v category-container">
        <CategoryCard
          image="https://i.postimg.cc/MGHsRdMc/mens-catg.jpg"
          categoryName="MENS"
          category="mens-clothing"
          widthClass="w-55"
        />
        <CategoryCard
          image="https://i.postimg.cc/wxmG0fWL/heroimage.jpg"
          categoryName="WOMENS"
          category="women-clothing"
          widthClass="w-45"
        />
        <CategoryCard
          image="https://i.postimg.cc/fRB2J6Ln/jewl-catg.jpg"
          categoryName="JEWELLERY"
          category="jewel"
          widthClass="w-45"
        />
        <CategoryCard
          image="https://source.unsplash.com/_aXa21cf7rY"
          categoryName="ELECTRONICS"
          category="electronics"
          widthClass="w-55"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
