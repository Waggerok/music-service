import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from '../pages/RegistrationPage';
import UserPage from '../pages/UserPage';
import MusicPage from '../pages/MusicPage';

const AppRouter : React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<RegistrationPage/>}></Route>
            <Route path='profile/:id' element={<UserPage/>}></Route>
            <Route path='*' element={<MusicPage/>}></Route>
        </Routes>
    )
}

export default AppRouter;