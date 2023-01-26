import Axios from './caller.service'

let login = (credentials) => {
  return Axios.post('/user/login', credentials)
}

let setToken = (token) => {
  localStorage.setItem('token', token)
}

let getToken = () => {
  let token = localStorage.getItem('token')
  return token ? token : null
}

const deleteToken = () => {
  localStorage.removeItem('token')
}

let isLogged = () => {
  let token = getToken()

  return !!token
}

export const accountService = { login, setToken, getToken, deleteToken, isLogged }
