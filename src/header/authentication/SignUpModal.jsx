import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../utils/firebase/Firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./SignUpModal.scss";
import * as ROUTES from "../../constant/Routes";

function SignUpModal(props) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        // console.log({ email: authUser.email, username: authUser.displayName });
        console.log(authUser);
        // return firebase.user(authUser.user.uid).set({
        //   email: authUser.user.email,
        //   username: authUser.user.displayName,
        //   roles: {},
        // });
      })
      .then(() => {
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleSignOut = () => {
    firebase.doSignOut();
  };
  return (
    <div id="signUpModal" className="overlay">
      <div className="card center z-1">
        <div className="signup-container">
          <div>
            <h2>Sign in to Little Tags</h2>
          </div>
          <div className="auth card">
            <div>
              <FcGoogle />
            </div>
            <div className="signin-text">
              <button onClick={handleGoogleSignIn}>Sign In with Google </button>
              <button onClick={handleSignOut}>Logout</button>
              {!!errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
            <div className="g-signin2">
             </div>
          </div>
          <div className="auth card">
            <div>
              <FaFacebook />
            </div>
            <div className="signin-text">Sign in with Facebook</div>

            {/* <!-- Display login status --> */}
            {/* <!-- The JS SDK Login Button --> */}

            <div
              className="fb-login-button"
              data-width=""
              data-size="large"
              data-button-type="continue_with"
              data-layout="default"
              data-auto-logout-link="false"
              data-use-continue-as="false"
            ></div>
            <div id="status"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
