import { all } from 'redux-saga/effects';
import fetchUsers from './user/saga';

function * rootSaga () {
    yield all([fetchUsers()]);
}

export default rootSaga;