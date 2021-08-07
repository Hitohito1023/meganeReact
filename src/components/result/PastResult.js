import React from 'react'
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap';

function PastResult(props) {
  const results = useSelector(state => state.results.list)

  return(
    <Row>
      <Col md="1" />
      <Col md="10">
        <h4 className="text-center">過去テスト結果</h4>
        <table className="table table-bordered table-hover table-sm">
          <thead className="text-center thead-light">
            <tr>
              <th style={{ width: '40%' }}>実施日</th>
              <th style={{ width: '15%' }}>ドライブ</th>
              <th style={{ width: '15%' }}>アナライズ</th>
              <th style={{ width: '15%' }}>クリエイト</th>
              <th style={{ width: '15%' }}>ボランティア</th>
            </tr>
          </thead>
          <tbody>
            {results.map(result => (
              <tr>
                <td>{result.createdDate}</td>
                <td>{result.driveType}</td>
                <td>{result.analyzeType}</td>
                <td>{result.createType}</td>
                <td>{result.volunteerType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Col>
      <Col md="1" />
    </Row>
  )
}

export default  withRouter(PastResult);