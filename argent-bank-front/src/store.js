import { createStore } from 'redux'

// state
const initialState = {
  authChecked: false,
  loggedIn: false,
  remember: false,
  token: null,
  user: {},
}

//action creators

export const USERPROFIL = (user) => ({ type: 'USERPROFIL', payload: { user } })
export const AUTHENTICATED = (remember, token) => ({
  type: 'AUTHENTICATED',
  payload: { remember, token },
})
export const NOT_AUTHENTICATED = () => ({ type: 'NOT_AUTHENTICATED' })

function reducer(state = initialState, action) {
  if (action.type === 'AUTHENTICATED') {
    return {
      ...state,
      authChecked: true,
      loggedIn: true,
      remember: action.payload.remember,
      token: action.payload.token,
    }
  }
  if (action.type === 'NOT_AUTHENTICATED') {
    return { ...state, ...initialState }
  }
  if (action.type === 'USERPROFIL') {
    return { ...state, user: action.payload.user }
  }
  return state
}

export const store = createStore(reducer)
