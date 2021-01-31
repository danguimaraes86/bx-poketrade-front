import axios from 'axios'

export default async function axiosRequest(url, baseURL, method, payload) {
  const response = await axios({
    url: url,
    method: method,
    baseURL: baseURL,
    data: payload
  })
  return response
}