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

  console.log(userResult);

  return (
    <div>

      
      {userResult != null && userResult != [] ?
      
       <ResultChart resultList={userResult} /> 
      :
       <p>テスト</p>
      }
    </div>
  )
}

export default SelectUser;