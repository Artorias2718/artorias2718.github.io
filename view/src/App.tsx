import { ReactElement } from 'react'
import Home from './pages/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (): ReactElement => {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
