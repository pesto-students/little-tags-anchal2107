import PropTypes from "prop-types";
import Login from "../profile/login";
//import SignUpModal from './authentication/SignUpModal';
function ProfileIcon({ imagePath, username }) {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return (
      <>
        <div className="profile-icon" onClick={() => {}}>
           {/* <SignUpModal />  */}
          <h3>Sign In / Sign Up</h3>
        </div>
        <Login></Login>
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

ProfileIcon.defaultProps = {
  imagePath: "",
  username: "",
};
