import React from 'react'
import { withRouter } from "react-router";
import Result from '../result/result';

function Top() {
  return (
    <div>
      <p>お疲れ様です! loginUserさん</p>
      <Result />
    </div>
  )
}

export default  withRouter(Top);
