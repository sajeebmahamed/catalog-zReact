import { Redirect, Router } from '@reach/router';
import React from 'react';
import HomePage from '../pages/home';

const AppRouter = () => (
    <Router>
        <HomePage path="/" />
        <Redirect from="/photos" to="/" noThrow />
    </Router>
);

export default AppRouter;
