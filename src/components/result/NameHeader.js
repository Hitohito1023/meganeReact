import React from 'react'
import { withRouter } from 'react-router'

function NameHeader(props) {

  return (
    <div className="text-center">
      <h2>現在のXXさんは、〇〇タイプです</h2>
    </div>
  )
}

export default withRouter(NameHeader);