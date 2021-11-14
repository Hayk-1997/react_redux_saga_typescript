import React from 'react';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ListItem } from "@mui/material";
import {TUser} from "../../store/user/types";

export interface IUserRow {
    user: TUser
}

const UserRow: React.FC<IUserRow> = ({ user }): JSX.Element => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default UserRow;