import MenuIcon from "./MenuIcon";
import CartIcon from "./CartIcon";
import ProfileIcon from "./ProfileIcon";
import SearchFilter from "./SearchFilter";
import "./Header.scss";


function Header(props) {
 return (
    <div className="header">
      <MenuIcon onHambergerOpen={props.onHambergerOpenFunFromApp}/>
      <div className="logo">
        <h1>Little Tags</h1>
      </div>
      <SearchFilter />
      <ProfileIcon />
      <CartIcon />
    </div>
  );
}

export default Header;
