import React from "react";
import PropTypes from "prop-types";
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
      <div className="signup-container">
        <div className="flex modal-header">
          <h2 className="flex-1">Sign in to Little Tags</h2>
          <GrClose onClick={handleCloseModal} />
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
