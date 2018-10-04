import { IBaseAction } from "./base";

export const userInfo = (data: IBaseAction) => ({
    type: 'userInfo',
    data
})
export const loginStatus = (data: IBaseAction) => ({
    type: 'loginStatus',
    data
})
export const logout = (data: IBaseAction) => ({
    type: 'logout',
    data
})