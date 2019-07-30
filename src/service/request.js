
// 引入网络请求库 https://github.com/axios/axios
/* eslint-disable */
import axios from 'axios'
// import store from '../store'
// import router from '../router'

// 请求列表
const requestList = []
// 取消列表
const CancelToken = axios.CancelToken
let sources = {}

// axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.defaults.baseURL = process.env.REACT_APP_URL

axios.interceptors.request.use((config) => {
  let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  if (userInfo) {
    const token = userInfo.token
    if (token) {
      config.headers.token = token
    }
  }
  return config
}, function (error) {
  console.log(error.response)
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  _successHandle(response);
  return response;
}, function (error) {
  _errorHandle(error.response);
  return Promise.reject(error)
})

function _errorHandle(errorMsg) {
  // store.commit('setStateSnackbar', { snackbar: true, type: 'error', text: `${errorMsg.data.status} ${errorMsg.data.path} ${errorMsg.data.error}` })
}

function _successHandle(response) {
  if (response.status === 200) {
    switch (response.data.code) {
      case 55555:
        // store.commit('setStateSnackbar', { snackbar: true, type: 'info', text: response.data.text })
        break;
      case 900401:
        // store.commit('setStateSnackbar', { snackbar: true, type: 'info', text: '认证失效，请重新登录！' });
        // router.push('/login');
        break;
      default:
        break;
    }
  }
}


const request = function (url, params, config, method) {
  return new Promise((resolve, reject) => {
    axios[method](url, params, Object.assign({}, config)).then(response => {
      resolve(response.data)
    }, error => {
      reject(error)
    }).catch(error => {
      reject(error)
    })
  })
}

const post = (url, params, config = {}) => {
  return request(url, params, config, 'post')
}

const get = (url, params, config = {}) => {
  return request(url, params, config, 'get')
}

export { sources, post, get }
