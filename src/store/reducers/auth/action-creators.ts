import {AuthAction, AuthActionEnum, IUser} from "./types";
import {AuthActionEnumSaga, AuthActionSaga} from "../../saga/auth/types";

export const AuthActionCreators = {
    //redux
    setUser: (user: IUser): AuthAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setError: (error: string): AuthAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    setLoading: (loading: boolean): AuthAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: loading}),
    setAuth: (auth: boolean): AuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    //saga
    setLogin: (data: IUser): AuthActionSaga => ({type: AuthActionEnumSaga.SET_LOGIN, payload: data}),
    setLogout: (): AuthActionSaga => ({type: AuthActionEnumSaga.SET_LOGOUT})
}