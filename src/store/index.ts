import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import userSlice from './user/slice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    users: userSlice
});

const store = configureStore({
    reducer,
    middleware: [
        ...getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        }),
        sagaMiddleware
    ],
});

sagaMiddleware.run(rootSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;