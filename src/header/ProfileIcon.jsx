import PropTypes from "prop-types";

function ProfileIcon({ imagePath, username }) {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return (
      <>
        <div className="profile-icon">
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
  username: PropTypes.string.isRequired,
};

PropTypes.defaultProps = {
  imagePath: "",
  username: "",
};
