import { Redirect, Router } from '@reach/router';
import React from 'react';
import DetailsPage from '../pages/details';
import VideoDetails from '../pages/details/videodetails';
import HomePage from '../pages/home';
import VideoPage from '../pages/video';

const AppRouter = () => (
    <Router>
        <HomePage path="/" />
        <Redirect from="/photos" to="/" noThrow />
        <VideoPage path="/videos" />
        <DetailsPage path="/photo/:id" />
        <VideoDetails path="videos/video/:id" />
    </Router>
);

export default AppRouter;
