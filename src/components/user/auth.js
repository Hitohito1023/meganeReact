import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
//ログイン判定
const Auth = props =>
    useSelector(state => state.loginState) ? props.children : <Redirect to={'/login'} />;

export default withRouter(Auth);