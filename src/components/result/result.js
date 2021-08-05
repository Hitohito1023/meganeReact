import React from 'react'
import { withRouter } from "react-router";

function Result() {


  return (
    <div>
      <NameHeader />
      <SwitchButton />
      <ResultList />
      <TypeList />
      <PastResult />
    </div>
  )
}

export default  withRouter(Result);