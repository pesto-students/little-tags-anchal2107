import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./SignUpModal.scss";

function SignUpModal() {
  return (
    <div className="card center z-1">
      <div className="signup-container">
          <div><h2>Sign in to Little Tags</h2></div>
        <div className="auth card">
          <div><FcGoogle /></div>
          <div className="signin-text">Sign in with Google</div>
        </div>
        <div className="auth card">
          <div><FaFacebook /></div>
          <div className="signin-text">Sign in with Facebook</div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
