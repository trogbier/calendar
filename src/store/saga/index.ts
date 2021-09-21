import {all} from 'redux-saga/effects'
import watchLogin from "./auth/Login";
import watchLogout from "./auth/Logout";


export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchLogout(),
    ])
}