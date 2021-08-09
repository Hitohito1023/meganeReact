import React, { useState } from "react";
import PropTypes from 'prop-types'
import { withRouter } from "react-router";
import 'whatwg-fetch';
import { Row, Col } from 'react-bootstrap';
import '../../css/user.css'

function Signup (props) {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [adminFlg, setAdminFlg] = useState(false);
  // const [createdDate, setCreatedDate] = useState(new Date());

  const [accountError, setAccountError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [teamError, setTeamError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const inputAccount = (e) => {
    setAccount(e.target.value);
  };

  const inputName = (e) => {
    setName(e.target.value);
  };

  const inputTeam = (e) => {
    setTeam(e.target.value);
  };

  const inputPassword = (e) => {
      setPassword(e.target.value);
  };

  const inputConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
  };

  const inputAdmin = (e) => {
    if (e.target.value === "admin"){
      setAdminFlg(true)
    } else {
      setAdminFlg(false)
    }
  };


  const validationCheckBeforeSubmit = () => {
    let count = 0;

    if(account.length === 0){
      setAccountError(true);
      count ++;
    } 

    if(name.length === 0){
      setNameError(true);
      count ++;
    } 

    if(team === "" || team === "0"){
      setTeamError(true);
      count ++;
    }

    if(password.length === 0){
      setPasswordError(true);
      count ++;
    } 

    if(confirmPassword.length === 0){
      setConfirmPasswordError(true);
      count ++;
    } 

    if(confirmPassword !== password){
      setConfirmPasswordError(true);
      count ++;
    } 

    if (count === 0){
      postSend()
    } else {
      return
    }
    
  }

  const postSend = () => {
    const data = {
      account: account,
      name: name,
      team: team,
      password: password,
      adminFlg: adminFlg,
    }
    console.log(data)
    fetch("http://localhost:8080/user/add", {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.status === 200) {
          props.history.push("/")
        } else {
          alert("送信に失敗しました。")
        }
    })
    .catch(error => console.error(error));
  }

  return (
    <>
      <Row>
        <Col md="3" />
        <Col md="6">
          <h2 className="signup-title">社員登録</h2>
          <table className="table table-bordered signup-table">
            <tbody>
              <tr>
                <th>社員番号</th>
                <td>
                  {accountError && <p>社員番号を入力してください。</p>}
                  <input type="text" size="30" value={account} onChange={inputAccount} />
                </td>
              </tr>
              <tr>
                <th>名前</th>
                <td>
                  {nameError && <p>名前を入力してください。</p>}
                  <input type="text" size="30" value={name} onChange={inputName} />
                </td>
              </tr>
              <tr>
                <th>所属</th>
                <td>
                  <select value={team} onChange={inputTeam} style={{ width: '320px' }}>
                  　<option value="0">所属を選択してください</option>
                    <option value="1">DriveDivision</option>
                    <option value="2">YokohamaDivision</option>
                    <option value="3">OsakaDivision</option>
                    <option value="4">FukuokaDivision</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>パスワード</th>
                <td>
                  {passwordError && <p>パスワードを入力してください。</p>}
                  <input type="password" size="30" value={password} onChange={inputPassword} />
                </td>
              </tr>
              <tr>
                <th>確認用パスワード</th>
                <td>
                  {confirmPasswordError && <p>パスワードを入力してください。</p>}
                  <input type="password" size="30" value={confirmPassword} onChange={inputConfirmPassword} />
                </td>
              </tr>
              <tr>
                <th>権限</th>
                <td> 
                  <strong>    
                    <input
                      type="radio"
                      value="admin"
                      onChange={inputAdmin}
                      checked={adminFlg === true}
                    />
                      管理者
                  </strong>
                  <strong className="admin-select">
                    <input
                      type="radio"
                      value="nomal"
                      onChange={inputAdmin}
                      checked={adminFlg === false}
                    />
                      一般
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <a href="#" className="signup-button" onClick={validationCheckBeforeSubmit}>　登録　</a>
          </div>
        </Col>
        <Col md="3" />
      </Row>
    </>
  )
}

Signup.propTypes = {
  history: PropTypes.object
}

export default withRouter(Signup)
