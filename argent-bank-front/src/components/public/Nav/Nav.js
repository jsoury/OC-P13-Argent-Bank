import style from './nav.module.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { accountService } from '@/_services/account.service'
import argentBankLogo from '@/assets/images/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { NOT_AUTHENTICATED } from '@/store'

const Nav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

  const signOut = () => {
    accountService.deleteToken()
    dispatch(NOT_AUTHENTICATED())
    navigate('/')
  }

  return (
    <nav className={style.nav}>
      <Link to="" className={style.nav__logo}>
        <img src={argentBankLogo} alt="argent bank logo"></img>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!accountService.isLogged() ? (
        <div>
          <Link to="/sign-in" className={style.nav__item}>
            <FontAwesomeIcon icon={faUserCircle} /> Sign In
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/profile" className={style.nav__item}>
            <FontAwesomeIcon icon={faUserCircle} /> {user.firstName} {user.lastName}
          </Link>
          <button onClick={signOut} className={style.nav__button}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
          </button>
        </div>
      )}
    </nav>
  )
}

export default Nav
