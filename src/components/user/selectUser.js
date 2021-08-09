import React, { useEffect, useState } from 'react'
// import { withRouter } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { useParams, withRouter } from 'react-router-dom';
import ResultChart from '../result/ResultChart';
import '../../css/user.css'


function SelectUser(props) {
  const [userResult, setUserResult] = useState(null)
  const userId = useParams();  
  const userLists = useSelector(state => state.users.list);

  console.log(userLists)

  // const user = userLists.filter((user) => user.id === userId)

  const user = userLists.filter(userList => userList.id === Number(userId.id))

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
        <div className="text-center no-test-name">
          <h2>{user[0].name}さんはテスト未実施です</h2>
        </div>

      :
       <ResultChart resultList={userResult} />      
      }
    </div>
  )
}

export default SelectUser;