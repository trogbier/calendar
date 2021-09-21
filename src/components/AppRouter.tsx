import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useAppSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useAppSelector(state => state.auth)

    return (
        <>
        <Switch>
            {isAuth
                ? privateRoutes.map(route => <Route exact={route.exact} path={route.path} component={route.component} key={route.path}/>)
                : publicRoutes.map(route => <Route exact={route.exact} path={route.path} component={route.component} key={route.path}/>)
            }
            <Redirect to={isAuth ? RouteNames.EVENT : RouteNames.LOGIN}/>
        </Switch>
        </>
    );
};

export default AppRouter;