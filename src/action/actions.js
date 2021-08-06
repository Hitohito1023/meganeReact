export const UPDATE_RESULT = "UPDATE_RESULT";
export const UPDATE_TYPE = "UPDATE_TYPE";
export const LOGIN = "LOGIN";
export const LOGIN_STATE = "LOGIN_STATE";

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
export function login(user) {
  return {
    type: LOGIN,
    user: user,
  }
}

export function loginState(bool) {
  return {
    type: LOGIN_STATE,
    isLogined: bool,
  }
}

