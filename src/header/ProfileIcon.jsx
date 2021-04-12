import { openSignInModal } from "../commonFunction.js";
// import SignUpModal from "./../Authentication/SignUpModal";
import PropTypes from "prop-types";

function ProfileIcon({ imagePath, username }) {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return (
      <>
        <div className="profile-icon" onClick={() => openSignInModal}>
          {/* <SignUpModal /> */}
          <h3>Sign In / Sign Up</h3>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="profile-icon"></div>
    </>
  );
}

export default ProfileIcon;

ProfileIcon.propTypes = {
  imagePath: PropTypes.string,
  username: PropTypes.string,
};

PropTypes.defaultProps = {
  imagePath: "",
  username: "",
};
