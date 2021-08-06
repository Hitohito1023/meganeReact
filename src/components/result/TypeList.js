import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateType } from '../../action/actions'
import { withRouter } from 'react-router'

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
  })

  return (
    <div>
      {types.map(type => (
        <table>
          <tr>
            <th colSpan="2">{type.name}</th>
          </tr>
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
            <td>Happy Word</td><td>{type.happyWord}</td>
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
        </table>
      ))}
    </div>
  )
}

export default  withRouter(TypeList);