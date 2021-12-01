import { all } from 'redux-saga/effects';
import { UserSaga } from './user/saga';

function * rootSaga () {
    yield all([UserSaga()]);
}

export default rootSaga;