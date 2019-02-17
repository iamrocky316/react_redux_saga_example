import * as actionTypes from './actionTypes';

// Action
export const getUserDetails = (payload) => {
    return {
        type: actionTypes.LOAD_USER_REQUEST,
        payload
    }
}