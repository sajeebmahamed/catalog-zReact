import { Redirect, Router } from '@reach/router';
import React from 'react';
import HomePage from '../pages/home';
import VideoPage from '../pages/video';

const AppRouter = () => (
    <Router>
        <HomePage path="/" />
        <Redirect from="/photos" to="/" noThrow />
        <VideoPage path="/videos" />
    </Router>
);

export default AppRouter;
