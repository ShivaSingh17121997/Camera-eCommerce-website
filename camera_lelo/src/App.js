import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import LargeWithLogoLeft from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <LargeWithLogoLeft />
      <h1>Jai Shree Ram</h1>
    </div>

  );
}


export default App;
