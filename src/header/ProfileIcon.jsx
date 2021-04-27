import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import * as ROUTES from "../constant/Routes";
import FirebaseContext from "./../firebase/FirebaseContext";
import { resetAuthUser } from "../actions";
import * as actions from "./../constant/actionTypes";

function ProfileIcon() {
  const authUser = useSelector((state) => state.sessionState);
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const loadSignInModal = () => {
    history.push(ROUTES.SIGN_IN);
  };
  if (!localStorage.authUser) {
    return (
      <div className="profile-icon" onClick={loadSignInModal}>
        <h3>Sign In / Sign Up</h3>
      </div>
    );
  }
  const openMenu = () => {
    if (document.getElementById("dropDownMenu").style.display === "block") {
      document.getElementById("dropDownMenu").style.display = "none";
    } else {
      document.getElementById("dropDownMenu").style.display = "block";
    }
  };
  const handleSignOut = () => {
    firebase.doSignOut();
    dispatch(resetAuthUser());
    dispatch({
      type: actions.RESET_CART,
      payload: null,
    });
  };
  const userData = authUser.authUser || JSON.parse(localStorage.authUser);
  const { imagePath, username } = userData;
  return (
    <div className="profile-icon dropdown">
      <img src={imagePath} alt="profile" />
      <h3 className="dropbtn" onClick={openMenu}>
        {username}
      </h3>
      <div id="dropDownMenu" className="dropdown-content">
        <div className="links">
          <Link to={ROUTES.MY_PROFILE}>My Profile</Link>
        </div>
        <div className="links">
          <Link to={ROUTES.MY_PROFILE}>My Wishlist</Link>
        </div>
        <div className="sign-out" onClick={handleSignOut}>
          <Link to={ROUTES.HOME}>Sign Out</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileIcon;
