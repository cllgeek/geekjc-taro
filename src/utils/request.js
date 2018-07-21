import Taro from '@tarojs/taro'

let baseUrl

baseUrl = 'https://www.geekjc.com'

const processRes = (res) => {
  if(res.data) return res.data
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(method, url, body) {
  method = method.toUpperCase()
  if(method === 'GET'){
    body = undefined
  }else {
    body = body && JSON.stringify(body)
  }
  return Taro.request({
    url: `${baseUrl}${url}`,
    method,
    header: {
      'content-type': 'application/json'
    },
    data: body
  })
    .then(processRes)
    .then((data) => ({data}))
    .catch((err) => ({ err }));
}

export const get = (url) => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);
