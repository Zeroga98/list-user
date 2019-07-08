import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as userReducer } from '../services/user/reducer'
import userAction, { UserTypes } from '../services/user/reducer'

export default (history) => {
  return combineReducers({
    router: connectRouter(history),
    user: userReducer,
  })
}

