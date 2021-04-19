import React from "react";

import { handleGoogleSignIn } from "../utils/socialAuthentication/GoogleSignIn";
export default function Login() {
  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={handleGoogleSignIn}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Continue with Google</span>
       </button>
      </div>
  );
}