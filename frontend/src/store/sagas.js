import { fork, all } from 'redux-saga/effects';

import UserSaga from '../services/user/saga';

export default function* rootSaga() {
    yield all([
        fork(UserSaga)
    ]);
}