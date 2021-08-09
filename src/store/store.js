import { createStore as reduxCreateStore, combineReducers } from 'redux'
import { resultReducer, typeReducer, loginUserReducer, loginReducer, userReducer } from '../reducer/reducers';

export default function createStore(){
  return reduxCreateStore(
    combineReducers({
      results: resultReducer,
      types: typeReducer,
      loginUser: loginUserReducer,
      isLogined: loginReducer,
      users: userReducer
    })
  )
}