import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter, useHistory } from "react-router-dom";
import FirebaseContext from "./../../firebase/FirebaseContext";
import SignUpModalContent from "./SignUpModalContent";
import "./SignUpModal.scss";

function SignUpModal({ show }) {
  localStorage.setItem("showModal", false);
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const handleCloseModal = () => {
    document.getElementById("signUpModal").style.display = "none";
  };
  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        if (authUser.additionalUserInfo.isNewUser) {
          return firebase.user(authUser.user.uid).set({
            email: authUser.user.email,
            username: authUser.user.displayName,
          });
        }
      })
      .then(() => {
        handleCloseModal();
        history.push("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleFacebookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser) => {
        if (authUser.additionalUserInfo.isNewUser) {
          return firebase.user(authUser.user.uid).set({
            email: authUser.user.email,
            username: authUser.user.displayName,
          });
        }
      })
      .then(() => {
        handleCloseModal();
        history.push("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  if (errorMessage) {
    return <h2>{errorMessage}</h2>;
  }
  //Need to fix this
  if (!show) {
    return (
      <div id="signUpModal" className="overlay none">
        <SignUpModalContent
          handleGoogleSignIn={handleGoogleSignIn}
          handleFacebookSignIn={handleFacebookSignIn}
          handleCloseModal={handleCloseModal}
        />
      </div>
    );
  } else {
    return (
      <div id="signUpModal" className="overlay">
        <SignUpModalContent
          handleGoogleSignIn={handleGoogleSignIn}
          handleFacebookSignIn={handleFacebookSignIn}
          handleCloseModal={handleCloseModal}
        />
      </div>
    );
  }
}

export default withRouter(SignUpModal);

SignUpModal.propTypes = {
  show: PropTypes.bool,
};

SignUpModal.defaultProps = {
  show: true,
};
