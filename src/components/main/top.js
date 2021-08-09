import React from 'react'
import { withRouter } from "react-router";
import Result from '../result/result';
import { Row, Col } from 'react-bootstrap';

function Top() {
  return (
    <>
      <Row>
        <Col md="1" />
        <Col md="10">
          <div>
            <p className="text-right mt-4">お疲れ様です! loginUserさん</p>
            <Result />
          </div>
        </Col>
        <Col md="1" />
      </Row>
    </>
  )
}

export default withRouter(Top);
