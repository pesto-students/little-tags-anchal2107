import "./ShippingDetails.scss";

function ShippingDetails() {
  return (
    <>
      <div className="shipping-details-container">
        <h1>Shipping Details</h1>
        <div className="form-input">
          <label htmlFor="shipPersonName">Name</label>
          <input type="text" id="shipPersonName" placeholder="Enter Name" />
        </div>
        <div className="form-input">
          <label htmlFor="shipPhoneNo">Phone No.</label>
          <input type="text" id="shipPhoneNo" placeholder="Enter Phone No." />
        </div>
        <div className="form-input">
          <label htmlFor="shipAddress">Address</label>
          <textarea type="text" id="shipAddress" placeholder="Enter Address" />
          <span>
            <input type="checkbox" id="shipDefaultAddress" checked />
            <label htmlFor="shipDefaultAddress">Set as default address</label>
          </span>
        </div>
        <div className="payment-button-div">
            <button value="Confirm Order" className="payment-button">Confirm Order</button>
        </div>
      </div>
    </>
  );
}

export default ShippingDetails;
