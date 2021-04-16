import "./ViewCurrentProfile";
import { useSelector } from "react-redux";


const ViewCurrentProfile = () => {
  const profileData = useSelector((state) => state.profileReducer);
 
  return (
    <div className="card">
      <img
        src="https://scontent.fstv3-1.fna.fbcdn.net/v/t1.6435-9/74238360_2183486101947984_7999950112962904064_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=_Zus-99OfWQAX99d7qO&_nc_ht=scontent.fstv3-1.fna&oh=db4f789952beca3e3b7396c356cb2598&oe=609E3EBE"
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
