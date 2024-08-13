import { ReactElement, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AtlasEarth from "./AtlasEarth/AtlasEarth.tsx";
import Home from "./AtlasEarth/pages/Home";
import Progress from "./AtlasEarth/pages/Progress";
import Parcels from "./AtlasEarth/pages/Parcels";
import Advice from "./AtlasEarth/pages/Advice";
import FAQ from "./AtlasEarth/pages/FAQ";
import Resources from "./AtlasEarth/pages/Resources";
import Root from "./Root/";
import './App.css'
import { ErrorBoundary } from "react-error-boundary";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000
        }
    }
});

const RouteDict = {
    AtlasEarth: () => (
        <Route path="atlasearth" element={<AtlasEarth />}>
            <Route index element={<Home />} />
            <Route path="progress" element={<Progress />} />
            <Route path="parcels" element={<Parcels />} />
            <Route path="advice" element={<Advice />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="resources" element={<Resources />} />
        </Route>
    )
};

const App = (): ReactElement => {
    useEffect(() => {
        document.title = 'Artorias2718';
    }, []);

    return (
    <>
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Root />} />
                        {RouteDict.AtlasEarth()}
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </QueryClientProvider>
    </>
)};

export default App