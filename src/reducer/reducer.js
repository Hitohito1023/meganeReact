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

export default function ResultReducer = (state = defaultResultState.results, action) => {
  switch (action.type) {
    case 'UPDATE_RESULT':
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}

export default function TypeReducer = (state = defaultTypeState.types, action) => {
  switch (action.type) {
    case 'UPDATE_TYPE':
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}