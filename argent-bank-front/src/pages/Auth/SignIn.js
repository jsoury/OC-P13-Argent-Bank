import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AUTHENTICATED } from '@/store'
import { accountService } from '@/_services/account.service'
import style from './signIn.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const SignIn = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [credentials, setCredentials] = useState({
    email: 'tony@stark.com',
    password: 'password123',
  })

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    accountService
      .login(credentials)
      .then((res) => {
        console.log(res)
        accountService.setToken(res.data.body.token)
        dispatch(AUTHENTICATED(res.data.body.token))
        navigate('/profile')
      })
      .catch((error) => console.log(error))
  }

  return (
    <main className="main bg-dark">
      <section className={style.signIn__content}>
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.input__wrapper}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className={style.input__wrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className={style.input__remember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={style.signIn__button}>Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignIn
