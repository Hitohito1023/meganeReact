import * as actions from "../action/actions"

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

const defaultLoginUserState = {
    loginUser: {
        user: [],
    }
}

const defaultLoginState = {
    loginState: {
        isLogined: false
    }
}

export const resultReducer = (state = defaultResultState.results, action) => {
    switch (action.type) {
        case (actions.UPDATE_RESULT):
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
        case (actions.UPDATE_TYPE):
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
}


export const loginUserReducer = (state = defaultLoginUserState.loginUser, action) => {
    switch (action.type) {
        case (actions.LOGIN):
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}
export const loginReducer = (state = defaultLoginState.loginState, action) => {
    switch (action.type) {
        case (actions.LOGIN_STATE):
            return {
                ...state,
                isLogined: action.isLogined
            };
        default:
            return state;
    }
}