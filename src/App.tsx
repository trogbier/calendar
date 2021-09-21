import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {useAppDispatch} from "./hooks/useTypedSelector";
import {IUser} from "./store/reducers/auth/types";

function App() {
    const {setAuth, setUser} = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({user: localStorage.getItem('user')} as IUser)
            setAuth(true)
        }
    }, [])

    return (
        <>
            <Navbar/>
            <AppRouter/>
        </>
    );
}

export default App;
