import React, { useEffect, useContext, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FirebaseContext from "../firebase/FirebaseContext";
import SignUpModal from "../header/authentication/SignUpModal";
import * as ROUTES from "../constant/Routes";

const withAuthorization = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);
    const [showLogin, setShowLogin] = useState(true);
    const showLoginModal = () => setShowLogin(!showLogin);

    const next = (authUser) => {
      if (!authUser) {
        props.history.push(ROUTES.HOME);
      }
    };
    const fallback = () => {};
    useEffect(() => {
      firebase.onAuthChangeListener(next, fallback);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return props.authUser ? (
      <Component {...props} />
    ) : (
      <>
        <h1>You need to sign in to access this page </h1>
        {showLogin ? <SignUpModal handleCloseModal={showLoginModal} /> : null}
      </>
    );
  };

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  const component1 = connect(mapStateToProps)(NewComponent);
  return withRouter(component1);
};

export default withAuthorization;
