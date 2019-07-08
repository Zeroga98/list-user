import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getListUsers: ['page'],
  getListUsersError: ['error'],
  getListUsersSuccess: ['user']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({

})

const getListUsersSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, listUser: action.user.listUser }
}

const getListUsersError = (state = INITIAL_STATE, action) => {
  console.log(action)
  return { ...state, error: action.error }
}


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LIST_USERS_SUCCESS]: getListUsersSuccess,
  [Types.GET_LIST_USERS_ERROR]: getListUsersError,
})