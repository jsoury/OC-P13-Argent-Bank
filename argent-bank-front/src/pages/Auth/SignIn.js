import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AUTHENTICATED } from '@/store'
import { accountService } from '@/_services/account.service'
import style from './signIn.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

/**
 * displays login form
 * @component
 * @returns {JSX} login form
 */
const SignIn = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [credentials, setCredentials] = useState({
    email: 'tony@stark.com',
    password: 'password123',
  })
  const [loginError, setLogginError] = useState(false)
  const [remember, setRemember] = useState(false)

  /**
   * update credentials input on change
   * @memberof SignIn
   * @function onChange
   */
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  /**
   * toggle the remember checkbox status
   * @memberof SignIn
   * @function toggleRemenber
   */
  const toggleRemenber = () => {
    setRemember(!remember)
  }

  /**
   * submit request login and update store with the response
   * @memberof SignIn
   * @function handleSubmit
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    accountService
      .login(credentials)
      .then((res) => {
        remember && accountService.setToken(res.data.body.token)
        dispatch(AUTHENTICATED(remember, res.data.body.token))
        navigate('/profile')
      })
      .catch((error) => {
        console.log(error)
        setLogginError(true)
      })
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
            <input type="checkbox" id="remember-me" checked={remember} onChange={toggleRemenber} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {loginError && <p className="error-message">Login Error</p>}
          <button className={style.signIn__button}>Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignIn
