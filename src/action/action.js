export function updateResult(result) {
  return {
    type: 'UPDATE_RESULT',
    payload: result
  }
}

export function updateType(type) {
  return {
    type: 'UPDATE_TYPE',
    payload: type
  }
}