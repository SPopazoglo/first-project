import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_USERS_DATA = 'SET_USERS_DATA'

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export const setAuthUsersData = (id, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  payload: { id, email, login, isAuth },
})

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data
      dispatch(setAuthUsersData(id, email, login, true))
    }
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUsersData(null, null, null, false))
    }
  })
}

export default authReducer
