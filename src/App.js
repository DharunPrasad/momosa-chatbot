import { useEffect, useState } from 'react';
import './App.css';
import Splash from './pages/Splash';

function App() {
  const [displaySplash, setDisplaySplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setDisplaySplash(false), 1000)
  })

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <main className="w-full sm:w-6/12 lg:w-4/12 mx-auto border bg-white h-screen relative">
      {displaySplash && <Splash/>}
      
      </main>
    </div>
  );
}

export default App;
