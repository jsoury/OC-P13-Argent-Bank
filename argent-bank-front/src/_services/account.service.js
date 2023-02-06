import Axios from './caller.service'
import { store } from '@/store'

/**
 * @description post login user
 * @param {object} credentials - user credentials
 * @param {string} credentials.email
 * @param {string} credentials.password
 * @returns response white token
 */
let login = (credentials) => {
  return Axios.post('/user/login', credentials)
}

/**
 * @description save token in local storage
 * @param {string} token - user token
 */
let setToken = (token) => {
  localStorage.setItem('token', token)
}

/**
 * @description get token in local storage
 * @returns {string} user token
 */
let getToken = () => {
  let token = localStorage.getItem('token')
  return token ? token : null
}

/**
 * @description remove token in local storage
 */
const deleteToken = () => {
  localStorage.removeItem('token')
}

/**
 * @description check the presence of the token in the local storage or in the store
 * @returns {string} token
 */
let isLogged = () => {
  const tokenStore = store.getState().token
  let token = getToken()
  return token || tokenStore
}

export const accountService = { login, setToken, getToken, deleteToken, isLogged }
