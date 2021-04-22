import { useHistory } from "react-router-dom";

function ProfileIcon() {
  const history = useHistory();
  const loadSignInModal = () => {
    history.push("/signin");
  };
  if (!localStorage.authUser) {
    return (
      <div className="profile-icon" onClick={loadSignInModal}>
        <h3>Sign In / Sign Up</h3>
      </div>
    );
  }
  const userData = JSON.parse(localStorage.authUser);
  const { imagePath, username } = userData;
  return (
    <div className="profile-icon">
      <img src={imagePath} alt="profile" />
      <h3>{username}</h3>
    </div>
  );
}

export default ProfileIcon;
