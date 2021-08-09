import React, { useEffect, useState } from 'react'
// import { withRouter } from 'react-router'
import { useParams, withRouter } from 'react-router-dom';
import ResultChart from '../result/ResultChart';


function SelectUser(props) {
  const [userResult, setUserResult] = useState(null)
  const userId = useParams();  

  useEffect(() => {
    fetch("http://localhost:8080/result/get/user/" + userId.id, {
      method: "GET"
    })
    .then(response => response.json())
    .then(data => setUserResult(data))
  }, []);

  return (
    <div>

      
      {userResult === null || userResult.length === 0 ?
        <p>テスト</p>

      :
       <ResultChart resultList={userResult} />      
      }
    </div>
  )
}

export default SelectUser;