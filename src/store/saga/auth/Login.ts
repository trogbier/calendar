import {AuthActionEnumSaga, setLogin} from "./types";
import {takeEvery, put, call} from "redux-saga/effects";
import {AuthActionCreators} from "../../reducers/auth/action-creators";
import axios from "axios";
import {IUser} from "../../reducers/auth/types";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

const request = async (payload: IUser) => {
    try {
        await delay(1000)
        const {data} = await axios.get<IUser[]>('./users.json')
        const mockUser = data.find(user => user.user === payload.user && user.password === payload.password)
        if (mockUser) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('user', payload.user)
        } else {
            throw new Error()
        }
    } catch (e) {
        throw new Error()
    }
}

function* Login({payload}: setLogin) {
    try {
        yield  put(AuthActionCreators.setLoading(true))
        yield call(request, payload)
        yield put(AuthActionCreators.setAuth(true))
        yield put(AuthActionCreators.setUser(payload))
        yield put(AuthActionCreators.setLoading(false))
        yield put(AuthActionCreators.setError(''))
    } catch (e) {
        yield put(AuthActionCreators.setError('Некоректные даные'))
    }
}

export default function* watchLogin() {
    yield takeEvery(AuthActionEnumSaga.SET_LOGIN, Login)
}
