import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import UserTable from './UserTable'

function UserList(props) {

  const [userList, setUserList] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8080/user/get", {
      method: "GET"
    })
    .then(response => response.json())
    .then(data => setUserList(data))
  }, []);

  

  return(

    <div>
      {userList && <UserTable userList={userList} />}
    </div>
  )
}

export default withRouter(UserList);