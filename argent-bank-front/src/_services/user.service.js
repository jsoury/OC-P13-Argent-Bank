import Axios from './caller.service'

/**
 * @description get user profile
 * @returns response
 */
let getUser = () => {
  return Axios.post('/user/profile')
}
/**
 * @description update user profile
 * @param {object} user - user for update
 * @param {string} user.firstName - user first name
 * @param {string} user.lastName - user last name
 * @returns message
 */
let updateUser = (user) => {
  return Axios.put('/user/profile', user)
}

export const userService = { getUser, updateUser }
