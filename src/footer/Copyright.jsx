import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
  FaCcAmex,
  FaCcApplePay,
  FaCcDiscover,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";

function Copyright() {
  return (
    <div className="copyright">
      <div className="flex footer-payment-div social">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
        <FaYoutube />
      </div>
      <h4>
        Made with <span className="red">❤</span> in Surat
      </h4>
      <div className="flex footer-payment-div payment">
        <FaCcVisa />
        <FaCcMastercard />
        <FaCcPaypal />
        <FaCcAmazonPay />
        <FaCcAmex />
        <FaCcApplePay />
        <FaCcDiscover />
      </div>
    </div>
  );
}

export default Copyright;
