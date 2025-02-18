import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import Navbar from './Components/Navbar';


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
