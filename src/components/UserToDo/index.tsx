import React, { lazy, Suspense, useEffect } from 'react';
import { Button, Grid, List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearUsersData, getUserById, getUsersSelector, removeUserById, userRequest } from "../../store/user/slice";
const Users = lazy(() => import(/* webpackChunkName: "Users" */'./Users'));

const UserToDo: React.FC = (): JSX.Element => {
    const users = useSelector(getUsersSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userRequest());
    }, []);


    const handleClearUsers = () => {
        dispatch(clearUsersData());
    }

    const handleDeleteUser = (id: number): void => {
        dispatch(removeUserById(id));
    }
    const handleGetUserById = (id: number): void => {
        dispatch(getUserById);
    }

    return (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center">
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    onClick={handleClearUsers}
                >
                    Clear
                </Button>
                <List>
                    <Suspense fallback={<div>...Loading</div>}>
                        {
                            users.map((user) => (
                                <Users
                                    key={user.id}
                                    user={user}
                                    handleDeleteUser={handleDeleteUser}
                                    handleGetUserById={handleGetUserById}
                                />
                            ))
                        }
                    </Suspense>
                </List>
            </Grid>
        </Grid>
    )
}

export default UserToDo;