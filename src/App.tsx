import {ReactElement, useEffect} from 'react'
import Navigation from './components/Navigation.tsx';
import Home from './pages/Home';
import Progress from './pages/Progress';
import Parcels from './pages/Parcels';
import Advice from './pages/Advice';
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
                <Route path="/" element={<Home />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/parcels" element={<Parcels />} />
                <Route path="/advice" element={<Advice />} />
            </Routes>
        </BrowserRouter>
    </>
)};

export default App