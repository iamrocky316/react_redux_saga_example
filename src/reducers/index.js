import * as actionTypes from "../actions/actionTypes";

// Reducer
export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER_SUCCESS:
      return action.user;
    default:
      return state;
  }
};
