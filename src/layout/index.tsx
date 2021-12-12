import React from 'react';
import {
    Link,
    Outlet
} from 'react-router-dom';
import Grid from '@mui/material/Grid';

const Layout = () => {

    return (
        <div>
            <h1>Welcome to the app!</h1>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                columns={{ md: 12 }}
            >
                <Link to="users">
                    <h2>Users</h2>
                </Link>
                {'/ '}
                <Link to="posts">
                    <h2>Posts</h2>
                </Link>
                {'/ '}
                <Link to="/">
                    <h2>{'<'}Go Back</h2>
                </Link>
            </Grid>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
};

export default Layout;