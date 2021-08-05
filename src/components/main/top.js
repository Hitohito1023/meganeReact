import React from 'react'
import { withRouter } from "react-router";
import Result from '../result/result';

function Top() {
  return (
    <div>
      <Result />
    </div>
  )
}

export default  withRouter(Top);
