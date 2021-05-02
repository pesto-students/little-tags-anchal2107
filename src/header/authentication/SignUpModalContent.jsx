import React from "react";
import PropTypes from "prop-types";
import logo from "./../../assets/logoo.JPG";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const SignUpModalContent = ({
  handleGoogleSignIn,
  handleFacebookSignIn,
  handleCloseModal,
}) => {
  return (
    <div className="card center z-1">
      <div className="flex modal-container">
        <div className="flex flex-col info-div">
          <h2>Welcome to</h2>
          <img src={logo} alt="logo"/>
        </div>
        <div className="signup-container">          
          <div className="close-div"><GrClose onClick={handleCloseModal} /></div>
          <div className="flex modal-header">
            <h2 className="flex-1">Sign in to Proceed</h2>
          </div>
          <div className="auth card" onClick={handleGoogleSignIn}>
            <div>
              <FcGoogle />
            </div>
            <div className="signin-text">Sign in with Google</div>
            <div className="g-signin2"></div>
          </div>
          <div className="auth card" onClick={handleFacebookSignIn}>
            <div>
              <FaFacebook />
            </div>
            <div className="signin-text">Sign in with Facebook</div>
            <div
              className="fb-login-button"
              data-width=""
              data-size="large"
              data-button-type="continue_with"
              data-layout="default"
              data-auto-logout-link="false"
              data-use-continue-as="false"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModalContent;

SignUpModalContent.propTypes = {
  handleGoogleSignIn: PropTypes.func.isRequired,
  handleFacebookSignIn: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

SignUpModalContent.defaultProps = {
  handleGoogleSignIn: () => {},
  handleFacebookSignIn: () => {},
  handleCloseModal: () => {},
};
