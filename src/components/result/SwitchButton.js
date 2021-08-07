import React from 'react'
import { withRouter } from "react-router";
import { useSelector } from 'react-redux'

function SwitchButton({setPrevResult, setNextResult, showData}) {
    const results = useSelector(state => state.results.list)

    const date = results[showData].createdDate.slice(0, 10).replace(/-/g, '/')

  return(
    <div className="text-center">
      <button onClick={() => setPrevResult()}>◀</button>
      <strong>　{date}実施分　</strong>
      <button onClick={() => setNextResult()}>▶</button>
    </div>
  )
}

export default  withRouter(SwitchButton);