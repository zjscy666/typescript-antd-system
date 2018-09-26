import { fetchData } from '../fetch'

export const login = async () => {
    let res = await fetchData({
        url: '/login',
        type: 'get'
    })
    return res;
};