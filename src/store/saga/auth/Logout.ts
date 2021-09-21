import {AuthActionEnumSaga, AuthActionSaga} from "./types";
import {takeEvery, put} from "redux-saga/effects";
import {AuthActionCreators} from "../../reducers/auth/action-creators";


function* Logout({payload}: AuthActionSaga) {
    try {
        // console.log('hi')
    } catch (e) {
        yield put(AuthActionCreators.setError('Ошибка'))
    }
}

export default function* watchLogout() {
    yield takeEvery(AuthActionEnumSaga.SET_LOGOUT, Logout)
}