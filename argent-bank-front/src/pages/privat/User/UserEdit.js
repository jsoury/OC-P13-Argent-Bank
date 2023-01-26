import React, { useState } from 'react'
import { userService } from '../../../_services/user.service'
import style from './user.module.scss'

const UserEdit = ({ user, handleChangeUser }) => {
  const [newUser, setNewUser] = useState(user)

  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }
  const onTrigger = () => {
    return newUser
  }
  const onCancel = () => {
    return
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    userService
      .updateUser(newUser)
      .then((res) => {
        console.log(res)
        handleChangeUser(onTrigger)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="userEdit">
      <h1>Welcome back</h1>
      <form onSubmit={handleSubmit} className={style.formNewUser}>
        <div className={style.formNewUser__wrapper}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={newUser.firstName}
            onChange={onChange}
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={newUser.lastName}
            onChange={onChange}
          />

          <button className="{style.signIn__button}">Save</button>
          <button className="{style.signIn__button}" onClick={() => handleChangeUser(onCancel)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserEdit
