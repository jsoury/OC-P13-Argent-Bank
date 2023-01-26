import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './profile.module.scss'
import { userService } from '@/_services/user.service'
import UserEdit from '@/pages/privat/User/UserEdit'
import { USERPROFIL } from '../../../store'

const Profile = () => {
  const user = useSelector((state) => state.user)
  const [showUserForm, setShowUserForm] = useState(false)
  const flag = useRef(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (flag.current === false) {
      userService
        .getUser()
        .then((res) => {
          console.log(res.data)
          dispatch(
            USERPROFIL({ firstName: res.data.body.firstName, lastName: res.data.body.lastName })
          )
        })
        .catch((error) => console.log(error))
    }
    return () => (flag.current = true)
  }, [])

  const store = useSelector((store) => store)
  console.log(store)

  const handleChangeUser = (childData) => {
    const newUser = childData()
    newUser && dispatch(USERPROFIL({ ...user, ...newUser }))
    setShowUserForm(false)
  }
  return (
    <div className={`${style.userProfile} main bg-dark`}>
      <div className={style.userProfile__header}>
        {!showUserForm ? (
          <>
            <h1>
              Welcome back
              <br /> {user.firstName} {user.lastName}
            </h1>
            <button className={style.userProfile__editButton} onClick={() => setShowUserForm(true)}>
              Edit Name
            </button>
          </>
        ) : (
          <UserEdit user={user} handleChangeUser={handleChangeUser} />
        )}
      </div>
    </div>
  )
}

export default Profile
