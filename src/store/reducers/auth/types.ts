export interface IUser {
    user: string,
    password: string
}

export interface AuthState {
    isAuth: boolean,
    user: IUser,
    isLoading: boolean,
    error: string
}

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH,
    payload: boolean
}

interface SetAuthErrorAction {
    type: AuthActionEnum.SET_ERROR,
    payload: string
}

interface SetAuthUserAction {
    type: AuthActionEnum.SET_USER,
    payload: IUser
}

interface SetAuthLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING,
    payload: boolean
}

export type AuthAction = SetAuthAction | SetAuthErrorAction | SetAuthUserAction | SetAuthLoadingAction