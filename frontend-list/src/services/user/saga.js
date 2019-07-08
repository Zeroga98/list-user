import { put, all, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import Api from '../../common/api';
import userAction, { UserTypes } from './reducer'

function* getListUsers({ page }) {
  console.log(page)
  const response = yield Api.get(`/api/user?page=${page}`)
  if (response.ok) {
    const payload = yield response.json();
    yield put(userAction.getListUsersSuccess({ listUser: payload }));
  }
  /*   if (response.ok) {
      const { accessToken } = yield response.json();
      yield put(userAction.setUser(accessToken));
      const user = Token.getUser();
      if (user.isConfirmed) {
        yield put(onboardingAction.getAchieveDreams())
        yield put(push('/home'))
      }
      else yield put(push('/very'));
  
    } else if (response.status === 401) {
      const { message } = yield response.json();
      yield put(userAction.loginError(message));
    } */
}



function* ActionWatcher() {
  yield takeLatest(UserTypes.GET_LIST_USERS, getListUsers)
}


export default function* rootSaga() {
  yield all([
    ActionWatcher()
  ]);
}