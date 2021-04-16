const initialState = {
  uid: "2378",
  firstName: "Anchal",
  middleName: "M",
  lastName: "Agarwal",
  primaryContactNumberCode: "+91",
  primaryContactNumber: "9999900000",
  primaryEmail: "anchal@anchal.com",
  dateOfRegistration: "12/4/21",
  shippingAddress: [
    {
      id: 1,
      name: "anchal",
      addressLine1: "gateway Row house",
      addressLine2: "",
      area: "Vesu",
      city: "surat",
      pincode: 395007,
      contactNumber: [
        {
          number: 1234567891,
          code: "+91",
        },
      ],
    },
  ],
};
const profileReducer = (state = initialState, action) => {
  return {
    ...state,
  };
};
export default profileReducer;
