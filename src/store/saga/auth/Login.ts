import {AuthActionEnumSaga, AuthActionSaga} from "./types";
import {takeEvery, put, call} from "redux-saga/effects";
import {AuthActionCreators} from "../../reducers/auth/action-creators";
import axios from "axios";

const request = async ()=> {
    const {data} = await axios.get('./users.json')
    console.log(data)
    return data
}

function* Login({payload}: AuthActionSaga) {
    try {
        // @ts-ignore
        const data = yield call(request)
    } catch (e) {
        yield put(AuthActionCreators.setError('Ошибка'))
    }
}

export default function* watchLogin() {
    yield takeEvery(AuthActionEnumSaga.SET_LOGIN, Login)
}
