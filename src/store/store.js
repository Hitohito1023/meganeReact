import { createStore as reduxCreateStore, combineReducers } from 'redux'
import { ResultReducer } from '../reducer/reducer';
import { TypeReducer } from '../reducer/reducer';

export default function createStore(){
  return reduxCreateStore(
    combineReducers({
      results: ResultReducer,
      types: TypeReducer
    })
  )
}