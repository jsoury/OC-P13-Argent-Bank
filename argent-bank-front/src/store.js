import { createStore } from 'redux'

// state
const initialState = {
  authChecked: false,
  loggedIn: false,
  user: {},
}

//action creators

export const USERPROFIL = (user) => ({ type: 'USERPROFIL', payload: { user: user } })
export const AUTHENTICATED = () => ({ type: 'AUTHENTICATED' })
export const NOT_AUTHENTICATED = () => ({ type: 'NOT_AUTHENTICATED' })

function reducer(state = initialState, action) {
  if (action.type === 'AUTHENTICATED') {
    return { ...state, authChecked: true, loggedIn: true }
  }
  if (action.type === 'NOT_AUTHENTICATED') {
    return { ...state, ...initialState }
  }
  if (action.type === 'USERPROFIL') {
    console.log(action.payload.user)
    return { ...state, user: action.payload.user }
  }
  return state
}

export const store = createStore(reducer)
