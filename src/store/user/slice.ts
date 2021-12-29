import { createSlice } from '@reduxjs/toolkit';
import { TUsers } from "./types";
import {RootState} from "../index";

const initialState: TUsers = {
    users: [],
    loading: true
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRequest: (state) => {
            state.loading = true;
            state.users = [];
        },
        userRequestSuccess: (state, action) => {
            state.users = action.payload.users;
            state.loading = false;
        },
        userRequestFailed: (state) => {
            state.loading = true;
        },
        clearUsersData: (state) => {
            state.users = []
        },
        removeUserById: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        }
    }
})

export const getUsersSelector = (state: RootState) => state.users.users;
export const getUserById = (state: RootState) => state.users.users;

export const {
    userRequest,
    userRequestSuccess,
    userRequestFailed,
    clearUsersData,
    removeUserById,
} = slice.actions;
export default slice.reducer;
