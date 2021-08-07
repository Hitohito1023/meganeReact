import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import ResultChart from './ResultChart'

function ResultList(props) {
  const [resultList, setResultList] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8080/result/get", {
      method: "GET"
    })
    .then(response => response.json())
    .then(data => setResultList(data))
  }, []);

  return (
    <div>
      {resultList && <ResultChart resultList={resultList} />}
      <div className="text-center">
        <a href="/diagnose">診断する</a>
      </div>
      
    </div>
  )
}

export default  withRouter(ResultList);