import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import ResultChart from './ResultChart'
import { useDispatch, useSelector } from "react-redux";
import { updateResult } from '../../action/actions'

function ResultList(props) {
  const [resultList, setResultList] = useState(null)
  const results = useSelector(state => state.results.list)
  const [isGetting, setIsGetting] = useState(false)
  const dispatch = useDispatch();
 
  useEffect(() => {
    fetch("http://localhost:8080/result/get", {
      method: "GET"
    })
    .then((response) => {
      response.json().then(json => {
        dispatch(updateResult(json))
        setIsGetting(true)
      })
    })
  }, [isGetting]);
console.log(results)
  return (
    <div>
      <ResultChart />
      <div className="text-center my-5">
        <a href="/users/select" className="diagnose-button">　診断する　</a>
      </div>
      
    </div>
  )
}

export default  withRouter(ResultList);