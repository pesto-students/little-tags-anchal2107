import { SET_AUTH_USER, RESET_AUTH_USER } from "../../constant/actionTypes";

const initialState = {
  authUser: null,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return { ...state, authUser: action.authUser };
    case RESET_AUTH_USER:
      return { ...state };
    default:
      return state;
  }
}
