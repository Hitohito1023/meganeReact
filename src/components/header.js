import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/actions';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import '../css/header.css';

class Header extends Component {
    constructor(props) {
        super(props)
        const { dispatch } = props;
        this.action = bindActionCreators(actions, dispatch);
    }
    render() {
        const handleLogout =()=> {
            this.action.login([]);
            this.action.loginState(false);
            window.location.href = "../login"
        }
        return (
            <header className="page-header wrappaer">
                <nav>
                    <ul class="main-nav">
                        <li><a href="/">トップ</a></li>
                        <li><a href="/users">社員一覧</a></li>
                        <li><a href="/users/edit">利用者情報</a></li>
                        <li><a href="/signup">利用者登録</a></li>
                        {this.props.isLogined ? <li onClick={() => handleLogout()}>ログアウト</li> : <li><a href="/login">ログイン</a></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}
function mapStateToProps(state) {
    return state
}
Header.propTypes = {
    dispatch: PropTypes.func,
    cookies: PropTypes.any
}

export default withRouter(connect(mapStateToProps)(Header));