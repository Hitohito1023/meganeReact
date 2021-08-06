import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../action/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import { withRouter } from "react-router";
import { withCookies } from 'react-cookie';

class Login extends Component {
    constructor(props) {
        super(props)
        const { dispatch } = props;
        this.action = bindActionCreators(actions, dispatch);
        this.state = {
            account: "",
            password: "",
            isMissLogin: false
        }
    }

    // ログインボタン
    loginSubmit() {
        const { cookies } = this.props;
        const data = { account: this.state.account, password: this.state.password };
        fetch("http://localhost:8080/user/login", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.status === 200) {
                    response.json()
                        .then(json => {
                            this.action.login(json);
                            this.action.loginState(true);
                            //this.action.loginState(true);
                            cookies.set('user', json, { path: "/" });
                            cookies.set('isSignedIn', true, { path: "/" });
                        })
                        this.setState({
                            isMissLogin: false
                        })
                        window.location.href = "../"
                } else {
                    this.setState({
                        isMissLogin: true,
                        password: ''
                    })
                }
            }).catch(error => console.error(error));
    }

    render() {
        const handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }
        return (
            <div className="loginMain">
                {this.state.isMissLogin &&
                    <Alert variant="danger py-2 text-center" className="login-error-alert">
                        <p>アカウントまたはパスワードが間違っています</p>
                    </Alert>
                }
                <Form>
                    <div class="form-group">
                        <label for="account">アカウント情報</label>
                        <input class="form-control" name="account" placeholder="社員番号を入力"
                            onChange={(e) => handleChange(e)} value={this.state.account} />
                    </div>

                    <div class="form-group">
                        <label for="password">パスワード</label>
                        <input type="password" class="form-control" name="password" placeholder="Password"
                            onChange={(e) => handleChange(e)} value={this.state.password} />
                    </div>

                    <Button className="loginButton" onClick={() => this.loginSubmit()} variant="primary">
                        ログイン
                    </Button>
                </Form>
            </div>
        )
    }

}

Login.propTypes = {
    dispatch: PropTypes.func,
    cookies: PropTypes.any,
    user: PropTypes.any,
    isSignedIn: PropTypes.bool,
    loginUser: PropTypes.any
}

function mapStateToProps(state) {
    return state;
}

export default withCookies(withRouter(connect(mapStateToProps)(Login)));