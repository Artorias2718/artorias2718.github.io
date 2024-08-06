import {ReactElement, useEffect} from 'react'
import Navigation from './components/Navigation.tsx';
import Home from './pages/AtlasEarth/Home';
import Progress from './pages/AtlasEarth/Progress';
import Parcels from './pages/AtlasEarth/Parcels';
import Advice from './pages/AtlasEarth/Advice';
import Resources from "./pages/AtlasEarth/Resources";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (): ReactElement => {
    useEffect(() => {
        document.title = 'Artorias2718 - Atlas Earth';
    }, []);

    return (
    <>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/atlasearth">
                    <Route index element={<Home />} />
                    <Route path="progress" element={<Progress />} />
                    <Route path="parcels" element={<Parcels />} />
                    <Route path="advice" element={<Advice />} />
                    <Route path="resources" element={<Resources />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
)};

export default App