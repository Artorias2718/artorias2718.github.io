import { ReactElement } from 'react';
import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation';

const AtlasEarth = (): ReactElement => (
    <>
        <Navigation />
        <br />
        {
            // This is where child routes will be rendered
        }
        <Outlet />
    </>
);

export default AtlasEarth;