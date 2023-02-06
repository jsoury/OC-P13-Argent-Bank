import axios from 'axios'
import { accountService } from './account.service'
import { store } from '../store'

/**
 * Caller service
 * @description intercept the request and check that the token exists in local storage or in the store
 */
const Axios = axios.create({
  baseURL: 'http://localhost:3001/api/V1',
})

Axios.interceptors.request.use((request) => {
  if (accountService.getToken()) {
    request.headers.Authorization = `Bearer ${accountService.getToken()}`
  } else {
    request.headers.Authorization = `Bearer ${store.getState().token}`
  }
  return request
})

export default Axios
