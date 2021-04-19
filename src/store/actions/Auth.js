import { SET_AUTH_USER } from '../../constant/actionTypes';

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
});
