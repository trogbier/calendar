import {IUser} from "../../reducers/auth/types";

export enum AuthActionEnumSaga {
    SET_LOGIN = 'SET_LOGIN',
    SET_LOGOUT = 'SET_LOGOUT'
}

interface setLogin {
    type: AuthActionEnumSaga.SET_LOGIN,
    payload: IUser

}

interface setLogout {
    type: AuthActionEnumSaga.SET_LOGOUT,
    payload: IUser
}

export type AuthActionSaga = setLogin | setLogout