import React from 'react';
import { FaMusic, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar : React.FC = () => {
    return (
        <div className='menu'>
            <nav className='menu__navbar'>
                <div className="menu__navbar_service">
                        <Link to='/music'>
                            Музыка
                            <FaMusic/>
                        </Link>
                </div>
                <div className="menu__navbar_profile">
                    <Link to='profile/:id'>
                        Профиль
                        <FaUser/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;