import { createStore as reduxCreateStore, combineReducers } from 'redux'
import { resultReducer, typeReducer, loginReducer } from '../reducer/reducers';

export default function createStore(){
  return reduxCreateStore(
    combineReducers({
      results: resultReducer,
      types: typeReducer,
      loginState: loginReducer
    })
  )
}