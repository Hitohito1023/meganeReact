import * as Actions from "../action/action"

const defaultResultState = {
  results: {
    list: []
  }
}

const defaultTypeState = {
  types: {
    list: []
  }
}

export const ResultReducer = ( state = defaultResultState.results, action) => {
  switch (action.type) {
    case (Actions.UPDATE_RESULT):
      return {
        ...state,
        list: action.payload
      }
    default:
      return state;
  }
}

export const TypeReducer = (state = defaultTypeState.types, action) => {
  switch (action.type) {
    case (Actions.UPDATE_TYPE):
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}