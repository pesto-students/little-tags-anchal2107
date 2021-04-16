import "./ViewCurrentProfile";
import '../style/Card.scss'
import { useSelector } from "react-redux";


const ViewCurrentProfile = () => {
  const profileData = useSelector((state) => state.profileReducer);
 
  return (
    <div className="card">
      <img
        src="https://www.doz.com/cms/wp-content/uploads/2014/05/online-profile.jpg"
        alt="John"
        style={{ width: "100px", verticalAlign: "center" }}
      />
      <h1>My Name: {profileData.firstName}</h1>
      <p className="title">You Email : {profileData.primaryEmail}</p>
      <p>Gujarat University</p>
      <a href="https://www.linkedin.com/in/anchal-agarwal-a9a94375/">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="https://www.facebook.com/AnchalJainAgarwal/">
        <i className="fa fa-facebook"></i>
      </a>
      <p>
        <button>Edit</button>
      </p>
    </div>
  );
};


export default ViewCurrentProfile;
