import "./ViewCurrentProfile";
import "../style/Card.scss";
import { useSelector } from "react-redux";
import {
  InsertOrUpdate,
  InsertScalar,
  SelectAll,
  SelectWithKeyAndValue,
} from "../utils/firebase/FirebaseCRUDOperations";
import { GoogleSignIn } from "../utils/socialAuthentication/GoogleSignIn";
const EditCurrentProfile = () => {
  const profileData = useSelector((state) => state.profileReducer);
  const SaveToFirebaseOnClick = () => {
   // GoogleSignIn();
    // callFirebase("9", "Laptops");
  };

  const callFirebase = (card, product) => {
    InsertOrUpdate("temNode", { quantity: card, product: product });
    console.log("insert called");

    let result = InsertScalar("temNode", {
      quantity: card + "221",
      product: product,
    });
    console.log(`insert called salacr ${JSON.stringify(result)}`);

    let selectall = SelectAll("temNode");
    console.log(` slect all ${JSON.stringify(selectall)}`);

    let selectata = SelectWithKeyAndValue("temNode", "quantity", card + "221");
    console.log(` select data ${selectata}`);
  };

  return (
    <div>
      <div
        className="card"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1>
          Edit Your Profile :
          {profileData.firstName + " " + profileData.lastName}
        </h1>
        <hr />

        <label>
          <b>First Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="first name"
          required
        />
        <br />
        <label>
          <b>Middle Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Middle Name"
          name="Middle name"
          required
        />
        <br />
        <label>
          <b>Last Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="Lasr name"
          required
        />
        <br />

        <label>
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />
        <br />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />
        <br />
        <label>
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        />
        <hr />
        <br />
        <button onClick={SaveToFirebaseOnClick}>Save</button>
      </div>
    </div>
  );
};
export default EditCurrentProfile;
