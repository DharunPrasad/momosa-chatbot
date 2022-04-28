import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Chatbot from './pages/Chatbot';
import Login from './pages/Login';
import Splash from './pages/Splash';

function App() {
  const [displaySplash, setDisplaySplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      setDisplaySplash(false);

    }, 1000)

  },[])

  useEffect(() => {
    if(!displaySplash) 
    {<Navigate to = "/login"/>}

  },[displaySplash])

  return (
    <div className="bg-gray-900 w-screen h-screen font-inter">
      <main className="w-full sm:w-6/12 lg:w-4/12 mx-auto border bg-white h-screen relative">
      {displaySplash && <Splash/>}
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path="/home" element = {<div>Home</div>} />
        <Route path = "/chatbot" element = {<Chatbot />} />
      </Routes>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
