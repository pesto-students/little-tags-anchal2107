import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import FirebaseContext from "./../firebase/FirebaseContext";
import withAuthorization from "./../session/withAuthorization";
import "./Profile.scss";

const Profile = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  const [address, setAddress] = useState("");
  const userData = authUser.authUser || JSON.parse(localStorage.authUser);
  const { imagePath, username, uid } = userData;
  const handleUpdateAddress = () => {
    const inputAddress = document.getElementById("inputDefaultAddress");
    const textAddress = document.getElementById("textDefaultAddress");
    if (inputAddress.classList.contains("none")) {
      inputAddress.classList.remove("none");
      textAddress.classList.add("none");
    } else {
      firebase.setDefaultAddress(uid, address);
      inputAddress.classList.add("none");
      textAddress.classList.remove("none");
    }
  };

  useEffect(() => {
    firebase.getDefaultAddress(uid).then((snapshot) => {
      const dbUser = snapshot.val();
      setAddress(dbUser);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <div className="view-profile-container">
        <h1>My Profile</h1>
        <img src={imagePath} alt="profile" />
        <h2>{username}</h2>
        <div className="flex m-1">
          <h4>Address:</h4>
          <h4 id="textDefaultAddress">{address}</h4>
          <textarea
            className="none"
            type="text"
            id="inputDefaultAddress"
            placeholder="Enter Address"
            defaultValue={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="address-button-div">
          <button
            value="Update Address"
            className="address-button"
            onClick={handleUpdateAddress}
          >
            Update Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuthorization(Profile);
