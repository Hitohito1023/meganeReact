import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import { useParams, useHistory, useLocation, Link } from 'react-router-dom';
// import { updateResult } from '../../action/actions'

function UserTable({userList}) {
  const users = userList;
  const dispatch = useDispatch();

//   dispatch(updateResult(results))

  return (
    <Row>
      <Col md="1" />
      <Col md="10">
        {/* <UserSort /> */}
        <table className="table table-bordered" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>社員番号</th>
              <th>所属</th>
              <th>名前</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {userList.map(user => (
            <tbody>
              <tr>
                <td>{user.account}</td>
                <td>{user.team.name}</td>
                <td><Link to={'/users/' + user.id}>{user.name}</Link></td>
                <td>編集</td>
                <td>停止する</td>
              </tr>
            </tbody>
          ))}
        </table>
      </Col>
      <Col md="1" />
    </Row>
  )
}

export default withRouter(UserTable);