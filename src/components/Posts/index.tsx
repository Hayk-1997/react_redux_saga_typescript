import React, {lazy, Suspense, useState} from 'react';
import {useGetPostsQuery} from "../../store/post/slice";
import {List} from "@mui/material";
import Button from "@mui/material/Button";
const Post = lazy(() => import(/* webpackChunkName: "Post" */'./Post'));

const Posts: React.FC = (): JSX.Element => {
    const [isClicked, setIsClicked] = useState("Preparing");
    const posts  = useGetPostsQuery(isClicked, {
        refetchOnFocus: true
    });

    console.log('data', posts.data);
    return (
        <List>
            <Button onClick={() => setIsClicked('Dune')}>Click Me</Button>
            <Suspense fallback={<div>...Loading</div>}>
                {
                    posts?.data?.map((post: any) => (
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