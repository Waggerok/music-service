import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import { store } from './store/store';


const App : React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
