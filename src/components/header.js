import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/header.css';
class Header extends Component {
    render() {
    return (
        <header classname="page-header wrappaer">
            <nav>
            <ul class="main-nav">
                <li><a href="/">トップ</a></li>
                <li><a href="/users">社員一覧</a></li>
                <li><a href="/users/edit">利用者情報</a></li>
                <li><a href="/signup">利用者登録</a></li>
                <li><a href="/login">ログイン</a></li>
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

export default withCookies(connect(mapStateToProps)(Header));