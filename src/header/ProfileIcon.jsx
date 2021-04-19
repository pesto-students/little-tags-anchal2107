import PropTypes from "prop-types";
import { Routelink } from "./Routelink";
import * as ROUTES_CONST from "../constant/Routes";

function ProfileIcon({ imagePath, username }) {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return (
      <>
        <div className="profile-icon" onClick={() => {}}>
        <Routelink
                routeurl={ROUTES_CONST.SIGN_IN_SIGN_UP}
                linkname="Sign In / Sign Up"
              ></Routelink>         
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

ProfileIcon.defaultProps = {
  imagePath: "",
  username: "",
};
