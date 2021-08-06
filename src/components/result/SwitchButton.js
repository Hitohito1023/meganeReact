import React from 'react'
import { withRouter } from "react-router";

function SwitchButton(props) {


  return(
    <div>
      <button>◀</button>
      <strong>result.createdDate</strong>
      <button>▶</button>
    </div>
  )
}

export default  withRouter(SwitchButton);