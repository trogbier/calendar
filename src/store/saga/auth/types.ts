import {IUser} from "../../reducers/auth/types";

export enum AuthActionEnumSaga {
    SET_LOGIN = 'SET_LOGIN',
    SET_LOGOUT = 'SET_LOGOUT'
}

export interface setLogin {
    type: AuthActionEnumSaga.SET_LOGIN,
    payload: IUser

}

export interface setLogout {
    type: AuthActionEnumSaga.SET_LOGOUT
}

export type AuthActionSaga = setLogin | setLogout