import { put, call ,takeLatest} from 'redux-saga/effects';
import {gitHubApi} from '../actions/actionCreators';
import * as actionTypes from '../actions/actionTypes';

// Sagas
function* loadUserDetails({ payload }) {
    try {
    console.log("[loadUserDetails] before api call")
        const user = yield call(gitHubApi, payload); // Make Api call to Github api with the username
        yield put({ type: actionTypes.LOAD_USER_SUCCESS, user }); // Yields effect to the reducer specifying the action type and optional parameter
    } catch (error) {
        throw error;
    }
}

// Watches for LOAD_USER_REQUEST action and call loadUserDetails with supplied arguments
export function* watchRequest() {
    console.log("[saga] inside watchRequest");
    yield takeLatest(actionTypes.LOAD_USER_REQUEST, loadUserDetails);
}