import React, {lazy, Suspense, useState} from 'react';
import {useGetPostsQuery} from "../../store/post/slice";
import {List} from "@mui/material";
import Button from "@mui/material/Button";
const Post = lazy(() => import(/* webpackChunkName: "Post" */'./Post'));

const Posts: React.FC = (): JSX.Element => {
    const [isClicked] = useState<boolean>(true);
    const { data, isLoading }  = useGetPostsQuery(isClicked, {
        // skip: true,
        // refetchOnFocus: true
        // pollingInterval: 3000,
    });

    return (
        <List>
            <Button>Click Me</Button>
            <Suspense fallback={<div>...Loading</div>}>
                {
                    !isLoading && data.map((post: any) => (
                       <Post
                           key={post.id}
                           post={post}
                       />
                    ))
                }
            </Suspense>
        </List>
    )
};

export default Posts;