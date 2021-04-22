import React, { useState, useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
import FirebaseContext from "./../../firebase/FirebaseContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./SignUpModal.scss";

function SignUpModal() {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        history.goBack();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleFacebookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        history.goBack();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div id="signUpModal" className="overlay">
      <div className="card center z-1">
        <div className="signup-container">
          <div>
            <h2>Sign in to Little Tags</h2>
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
            <div id="status">{errorMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SignUpModal);
