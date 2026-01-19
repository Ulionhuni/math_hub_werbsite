import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRouters, publicRoutes} from "../routes";
import {Context} from "../index";
import Auth from "../pages/Auth";

const AppRouter = () => {
    const isAuth = false
    const {user} = useContext(Context)

    //console.log(user)
    return (
        <Routes>
            {user.isAuth && authRouters.map(({path, Component}) =>
                <Route key = {path} path = {path} Component = {Component} exact/>
                )}
            {publicRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} Component = {Component} exact/>
            )}
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<Navigate to="/home" replace />} />

        </Routes>
    );
};

export default AppRouter;