import Categories from "./Categories";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import Subscribe from "./Subscribe";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-main">
        <ContactInfo />
        <Categories />
        <Subscribe />
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
