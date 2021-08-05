import React from 'react'
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

function PastResult(props) {
  const results = useSelector(state => state.results.list)

  return(
    <div>
      <table>
        <tr>
          <th>実施日</th>
          <th>ドライブ</th>
          <th>アナライズ</th>
          <th>クリエイト</th>
          <th>ボランティア</th>
        </tr>
        {results.map(result => (
          <tr>
            <td>{result.createdDate}</td>
            <td>{result.driveType}</td>
            <td>{result.analyzeType}</td>
            <td>{result.createType}</td>
            <td>{result.volunteerType}</td>
          </tr>
        ))}
      </table>
    </div>

  )
}

export default  withRouter(PastResult);