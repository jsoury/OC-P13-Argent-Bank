import Axios from './caller.service'

let getUser = () => {
  return Axios.post('/user/profile')
}

let updateUser = (data) => {
  return Axios.put('/user/profile', data)
}

export const userService = { getUser, updateUser }
