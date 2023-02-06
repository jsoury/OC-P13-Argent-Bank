import { Navigate } from 'react-router-dom'
import { accountService } from '@/_services/account.service'
import { useDispatch } from 'react-redux'
import { NOT_AUTHENTICATED } from '@/store'

/**
 * @description block access to private router on user is not login
 * @returns {children}
 */
const AuthGuard = ({ children }) => {
  const dispatch = useDispatch()
  if (!accountService.isLogged()) {
    dispatch(NOT_AUTHENTICATED())
    return <Navigate to="/sign-in" />
  } else {
    return children
  }
}

export default AuthGuard
