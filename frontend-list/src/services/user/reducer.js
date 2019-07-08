import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getListUsers: ['page'],
  getListUsersError: ['error'],
  getListUsersSuccess: ['users'],
  getUser: ['id'],
  getUserError: ['error'],
  getUserSuccess: ['user']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({

})

const getUser = (state = INITIAL_STATE, action) => {
  return {
    ...state, userProfile: {
      avatar: "https://www.comotiongroup.ca/wp-content/plugins/pixelthrone__vc_extension/assets/img/shortcode-frontend/empty-image-thumb.png",
      email: "",
      first_name: "",
      last_name: "",
    }
  }
}

const getListUsersSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, listUser: action.users.listUser }
}

const getListUsersError = (state = INITIAL_STATE, action) => {
  return { ...state, error: action.error }
}

const getUserSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, userProfile: action.user }
}

const getUserError = (state = INITIAL_STATE, action) => {
  return { ...state, error: action.error }
}


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LIST_USERS_SUCCESS]: getListUsersSuccess,
  [Types.GET_LIST_USERS_ERROR]: getListUsersError,
  [Types.GET_USER]: getUser,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_ERROR]: getUserError,
})