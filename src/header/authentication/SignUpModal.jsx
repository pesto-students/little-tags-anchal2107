import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./SignUpModal.scss";
import { Firebase } from "../../utils/firebase/Firebase";

function SignUpModal() {
  const onGoogleSignInClick = () => {
    Firebase.GoogleSignIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div id="signUpModal" className="overlay">
      <div className="card center z-1">
        <div className="signup-container">
          <div>
            <h2>Sign in to Little Tags</h2>
          </div>
          <div className="auth card">
            <div>
              <FcGoogle />
            </div>
            <div className="signin-text"><button  >Sign in with Google</button></div>
            <div className="g-signin2"></div>
            <a href="./">Sign out</a>
          </div>
          <div className="auth card">
            <div>
              <FaFacebook />
            </div>
            <div className="signin-text">Sign in with Facebook</div>

            {/* <!-- Display login status --> */}
            {/* <!-- The JS SDK Login Button --> */}

            <div
              className="fb-login-button"
              data-width=""
              data-size="large"
              data-button-type="continue_with"
              data-layout="default"
              data-auto-logout-link="false"
              data-use-continue-as="false"
            ></div>
            <div id="status"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
