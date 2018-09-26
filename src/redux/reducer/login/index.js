let username = '';
let password = '';
let initState = {
    loginStatus: false,
    userInfo: {
        username: username,
        password: password
    }
}

export default function login(state = initState, action) {
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