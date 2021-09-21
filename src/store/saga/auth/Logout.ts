import {AuthActionEnumSaga} from "./types";
import {takeEvery, put} from "redux-saga/effects";
import {AuthActionCreators} from "../../reducers/auth/action-creators";
import {IUser} from "../../reducers/auth/types";


function* Logout() {
    localStorage.removeItem('auth')
    localStorage.removeItem('user')
    yield put(AuthActionCreators.setUser({} as IUser))
    yield put(AuthActionCreators.setAuth(false))
}

export default function* watchLogout() {
    yield takeEvery(AuthActionEnumSaga.SET_LOGOUT, Logout)
}