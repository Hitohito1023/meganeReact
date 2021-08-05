import React from 'react'
import { withRouter } from "react-router";
import NameHeader from './NameHeader';
import TypeList from './TypeList';
import ResultList from './resultList';

function Result() {


  return (
    <div>
      <NameHeader />
      {/* <SwitchButton /> */}
      <ResultList />
      <TypeList />
      {/* <PastResult /> */}
    </div>
  )
}

export default  withRouter(Result);