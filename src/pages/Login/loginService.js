
import { post } from '../../service/request'
import apiConfig from '../../apiConfig'

/**
 * 登陆
 * @param {} params 
 */
export function signin(params = {}) {
  return post(apiConfig.auth.signin, params)
}

/**
 * 是否登陆
 */
export function isLogin() {
  return sessionStorage.getItem('token') ? true : false;
}

/**
 * 设置token
 * @param {*} info 
 */
export function setLogin(info = {}) {
  sessionStorage.setItem('token', info.token);
  sessionStorage.setItem('userInfo', JSON.stringify(info));
}
export function setAccount(phone, password) {
  localStorage.setItem('phone', phone);
  localStorage.setItem('password', password);
}

export function getAccount() {
  const phone = localStorage.getItem('phone');
  const password = localStorage.getItem('password');
  return { phone, password }
}
export function clearAccount() {
  localStorage.removeItem('phone');
  localStorage.removeItem('password');
}




