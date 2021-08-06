import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateResult } from '../../action/actions'
import { withRouter } from 'react-router'
import ResultChart from './ResultChart'

function ResultList(props) {
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