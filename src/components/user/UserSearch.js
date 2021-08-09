import React from 'react'
import { withRouter } from "react-router";
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

function UserSearch({users, inputName}) {


  return (
    <>
      <Row>
        <Col md="3" />
        <Col md="6">
          {/* <input type="text" size="30" value={name} onChange={inputName} /> */}
        </Col>
        <Col md="3" />
      </Row>
    </>
  )
}

export default  withRouter(UserSearch);