import { Navigate } from 'react-router-dom'
import { accountService } from '@/_services/account.service'
import { useDispatch } from 'react-redux'
import { AUTHENTICATED, NOT_AUTHENTICATED } from '@/store'

const AuthGuard = ({ children }) => {
  const dispatch = useDispatch()
  if (!accountService.isLogged()) {
    dispatch(NOT_AUTHENTICATED())
    return <Navigate to="/sign-in" />
  } else {
    dispatch(AUTHENTICATED())
    return children
  }
}

export default AuthGuard
