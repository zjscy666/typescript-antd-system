import { IBaseReActions } from "./base";

const username = '';
const password = '';
const initState = {
    loginStatus: false,
    userInfo: {
        username,
        password
    }
}

export default function login(state= initState, action: IBaseReActions) {
    const { type, data } = action
    switch (type) {
        case 'userInfo':
            return {
                ...state,
                userInfo: data
            }
        case 'loginStatus':
            return {
                ...state,
                loginStatus: data
            }
        case 'logout':
            return {
                ...state,
                loginStatus: data
            }
        default:
            return { ...state }
    }
}