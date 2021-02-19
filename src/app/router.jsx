import { Redirect, Router } from '@reach/router';
import React from 'react';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
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
        <AboutPage path="/about" />
        <ContactPage path="/contact" />
    </Router>
);

export default AppRouter;
