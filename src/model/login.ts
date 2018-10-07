import { fetchData } from '../fetch'

export const login = async () => {
    const res = await fetchData({
        url: '/login',
        type: 'get'
    })
    return res;
};