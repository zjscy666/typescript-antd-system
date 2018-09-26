import { baseUrl } from '../staticConfig/dev/devConfig'
const axios = require('axios')
const qs = require('querystring')

export const fetchData = async(config) => {
  let res = null
  config.url = baseUrl + config.url;
  if (config.type === 'get') {
     res = await axios.get(config.url)
     res = res.data
  } else {
    res = await axios.post(config.url, qs.stringify(config.data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    res = res.data
  }
  return res
}