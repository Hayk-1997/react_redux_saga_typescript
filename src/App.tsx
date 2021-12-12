import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';

import UserToDo from './components/UserToDo';
import Layout from './layout';
import Posts from './components/Posts';

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="users" element={<UserToDo />} />
                    <Route path="posts" element={<Posts />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
