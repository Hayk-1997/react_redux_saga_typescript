import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersSelector, userRequest } from './store/user/slice';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import UserRow from "./components/Users";

const App: React.FC = (): JSX.Element =>  {
  const users = useSelector(getUsersSelector);
  const dispatch = useDispatch();
    console.log('users', users);

    useEffect(() => {
        dispatch(userRequest());
    }, []);

    return (
      <Grid  container
             direction="row"
             justifyContent="center"
             alignItems="center">
         <Grid item xs={12}>
             <List>
                 {
                     users.map((user) => (
                         <UserRow key={user.id} user={user}/>
                     ))
                 }
             </List>
         </Grid>
      </Grid>
  );
}

export default App;
