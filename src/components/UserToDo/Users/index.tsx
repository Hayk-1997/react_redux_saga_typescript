import React from 'react';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ListItem } from "@mui/material";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Grid from '@mui/material/Grid';

import { TUser } from "../../../store/user/types";

export interface IUserRow {
    user: TUser,
    handleDeleteUser: (id: number) => void
    handleGetUserById: (id: number) => void
}

const Users: React.FC<IUserRow> = ({ user, handleDeleteUser, handleGetUserById }): JSX.Element => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <Grid
                    container
                    direction="row"

                    spacing={2}>
                    <Grid item xs={4}>
                        <ListItemText
                            primary={user.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        { user.email }
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Grid
                            container
                            justifyContent="flex-end"
                        >
                            <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                onClick={() => handleDeleteUser(user.id)}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<ControlPointIcon />}
                                onClick={() => handleGetUserById(user.id)}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default React.memo(Users);