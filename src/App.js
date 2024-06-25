import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import PageNotFound from './Components/PageNotFound';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login/> } />
        <Route exact path="/PageNotFound" element={<PageNotFound/> } />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
