import * as Actions from "../action/actions"

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

const defaultLoginState = {
    loginState: {
        user: [],
        isLogin: false,
    }
}

export const resultReducer = (state = defaultResultState.results, action) => {
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

export const typeReducer = (state = defaultTypeState.types, action) => {
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


export const loginReducer = (state = defaultLoginState.loginState, action) => {
    switch (action.type) {
        case (Actions.LOGIN):
            return {
                ...state,
                loginUser: action.payload,
                isLogIn: true,
            };
        case (Actions.LOGOUT):
            return {
                ...state,
                loginUser: action.payload, //payload=[]
                isLogIn: false,
            };
        default:
            return state;
    }
}