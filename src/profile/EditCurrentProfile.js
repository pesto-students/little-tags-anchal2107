import "./ViewCurrentProfile";

const EditCurrentProfile = () => {
  return (
    <div>
      <div className="container">
        <h1>Edit Your Profile</h1>
        <hr />

        <label >
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />
        <br/>

        <label >
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />
   <br/>
        <label >
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        />
        <hr /><br/>
        <button>Save</button>
      </div>

     
    </div>
  );
};
export default EditCurrentProfile;
