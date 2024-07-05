import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ChatScreen from './Components/ChatScreen';
import Main from './Components/Main';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Main/> } />
        <Route exact path="/ChatScreen" element={<ChatScreen/> } />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
