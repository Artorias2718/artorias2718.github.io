import { ReactElement } from 'react';
import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation';

const AtlasEarth = (): ReactElement => (
    <>
        <Navigation />
        <br />
        <Outlet />  {/* This is where child routes will be rendered */}
    </>
);

export default AtlasEarth;
