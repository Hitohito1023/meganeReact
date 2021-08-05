import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateType } from '../../action/action'
import { withRouter } from 'react-router'

function TypeList(props) {
  const types = useSelector(state => state.types.list)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8080/type/get", {
      method: "GET"
    })
    .then((response) => {
      response.json().then(json => {
        dispatch(updateType(json))
      })
    })
  })

  return (

  )
}

export default  withRouter(TypeList);