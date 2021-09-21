import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState} from '../store'
import {bindActionCreators} from "redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const allActionCreators = {...AuthActionCreators}

export const useAppDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector