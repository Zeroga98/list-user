import { put, all, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import Api from '../../common/api';
import userAction, { UserTypes } from './reducer'

function* getListUsers({ page }) {
  const response = yield Api.get(`/api/user?page=${page}`)
  if (response.ok) {
    const payload = yield response.json();
    yield put(userAction.getListUsersSuccess({ listUser: payload }));
  }
}

function* getUser({ id }) {

  const response = yield Api.get(`/api/user-profile/${id}`);
  if (response.ok) {
    const payload = yield response.json();
    yield put(userAction.getUserSuccess(payload));
  }
}



function* ActionWatcher() {
  yield takeLatest(UserTypes.GET_LIST_USERS, getListUsers)
  yield takeLatest(UserTypes.GET_USER, getUser)
}


export default function* rootSaga() {
  yield all([
    ActionWatcher()
  ]);
}