import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateResult } from '../../action/action'
import { withRouter } from 'react-router'

function ResultList(props) {
  const results = useSelector(state => state.results.list)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8080/result/get", {
      method: "GET"
    })
    .then((response) => {
      response.json().then(json => {
        dispatch(updateResult(json))
      })
    })
  })

  return (
    <div>
      <ResultChart />
      <a href="/diagnose">診断する</a>
    </div>
  )
}

export default  withRouter(ResultList);