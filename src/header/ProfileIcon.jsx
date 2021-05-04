import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function ProfileIcon({ showLoginModal }) {
  const authUser = useSelector((state) => state.sessionState);
  if (!localStorage.authUser) {
    return (
      <div className="profile-icon" onClick={showLoginModal}>
        <h3>Sign In / Sign Up</h3>
      </div>
    );
  }

  const userData = authUser.authUser || JSON.parse(localStorage.authUser);
  const { imagePath, username } = userData;
  return (
    <div className="profile-icon dropdown">
      <img src={imagePath} alt="profile" />
      <h3 className="dropbtn">{username}</h3>
    </div>
  );
}

export default ProfileIcon;

ProfileIcon.propTypes = {
  showLoginModal: PropTypes.func,
};

ProfileIcon.defaultProps = {
  showLoginModal: () => {},
};
