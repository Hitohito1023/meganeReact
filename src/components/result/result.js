import React from 'react'
import { withRouter } from "react-router";
import NameHeader from './NameHeader';
import TypeList from './TypeList';
import ResultList from './resultList';
import PastResult from './PastResult';


function Result() {
  return (
    <div>
      <NameHeader />
      <ResultList />
      <TypeList />
      <PastResult />
    </div>
  )
}

export default  withRouter(Result);