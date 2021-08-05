export const UPDATE_RESULT = "UPDATE_RESULT";
export const UPDATE_TYPE = "UPDATE_TYPE";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

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
        payload: user,
        isLogin: true
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: [],
        isLogin: false,
    }
}

