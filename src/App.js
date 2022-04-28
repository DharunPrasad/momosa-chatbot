import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Chatbot from './pages/Chatbot';
import Login from './pages/Login';
import Splash from './pages/Splash';

function App() {



  return (
    <div className="w-screen h-screen font-inter">
      <main className="w-full sm:w-6/12 lg:w-4/12 mx-auto bg-white h-fit relative">
      {/* {displaySplash && <Splash caption=""/>} */}
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/chatbot" element = {<Chatbot />} />
      </Routes>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
