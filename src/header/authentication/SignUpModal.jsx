import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "./../../firebase/FirebaseContext";
import SignUpModalContent from "./SignUpModalContent";
import "./SignUpModal.scss";

function SignUpModal({ handleCloseModal }) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");
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
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  if (errorMessage) {
    return <h2>{errorMessage}</h2>;
  }
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

export default SignUpModal;

SignUpModal.propTypes = {
  handleCloseModal: PropTypes.func,
};

SignUpModal.defaultProps = {
  handleCloseModal: () => {},
};
