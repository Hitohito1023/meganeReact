import React from 'react'
import { withRouter } from "react-router";

function User() {
  return (
    <div>
      <h2>社員一覧</h2>
      <UserList />
    </div>
  )
}

export default  withRouter(User);