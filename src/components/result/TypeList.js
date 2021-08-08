import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateType } from '../../action/actions'
import { withRouter } from 'react-router'
import '../../css/result.css'
import { Row, Col } from 'react-bootstrap';

function TypeList(props) {
  const types = useSelector(state => state.types.list)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8080/type/get", {
      method: "GET"
    })
    .then((response) => {
      response.json().then(json => {
        dispatch(updateType(json))
      })
    })
  },[])

  return (
    <Row>
      <Col md="1" />
      <Col md="10">
        <div className="type-contents">
          {types.map(type => (
            <details>
              <summary>「{type.name}タイプ」とは？</summary>
              <table className="table table-bordered" style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td>欲求</td><td>{type.desire}</td>
                  </tr>
                  <tr>
                    <td>Key</td><td>{type.keyword}</td>
                  </tr>
                  <tr>
                    <td>初対面</td><td>{type.impression}</td>
                  </tr>
                  <tr>
                    <td>HappyWord</td><td>{type.happyWord}</td>
                  </tr>
                  <tr>
                    <td>趣向</td><td>{type.detail}</td>
                  </tr>
                  <tr>
                    <td>ストレス</td><td>{type.stress}</td>
                  </tr>
                  <tr>
                    <td>強み</td><td>{type.strength}</td>
                  </tr>
                  <tr>
                    <td>課題</td><td>{type.weekness}</td>
                  </tr>
                </tbody>
              </table>
            </details>
          ))}
        </div>
      </Col>
      <Col md="1" />
    </Row>
  )
}

export default  withRouter(TypeList);