import { put, call, takeLatest } from 'redux-saga/effects';
import {userRequest, userRequestFailed, userRequestSuccess} from './slice';
import { GetUsersRequest } from './service';


function* fetchUsers() {
    try {
        const response : ReturnType<typeof GetUsersRequest> = yield call(GetUsersRequest);
        yield put(userRequestSuccess({ users: response }));
    } catch (e) {
        yield put(userRequestFailed());
    }
}


export default function* () {
    yield takeLatest(userRequest, fetchUsers);
}
