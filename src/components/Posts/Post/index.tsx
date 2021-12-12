import React from 'react';
import {ListItem} from "@mui/material";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface IPost {
   post: {
       body: string,
       title: string
   }
}

const Post: React.FC<IPost> = ({ post }): JSX.Element => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <Grid
                    container
                    direction="row"

                    spacing={2}>
                    <Grid item xs={4}>
                        <ListItemText
                            primary={post.title}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        { post.body }
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </Grid>
                </Grid>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default Post;