export const UPDATE_RESULT = "UPDATE_RESULT";
export const UPDATE_TYPE = "UPDATE_TYPE";

export function updateResult(result) {
  return {
    type: UPDATE_RESULT,
    payload: result
  }
}

export function updateType(type) {
  return {
    type: UPDATE_TYPE,
    payload: type
  }
}