import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Adorama from './Pages/Adoramarentals.jsx';
import {Stack, Center, Button} from '@chakra-ui/react'
import Form from './Form/Form';
import { useState } from 'react';


function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     <h1>Jai Shree Ram</h1>
   
    </div>
    
  );
}

export default App;
