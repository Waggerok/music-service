import * as React from 'react';

const Navbar = () => {
    return (
        <div className='menu'>
            <nav className='menu__navbar'>
                <div className="menu__navbar_links">
                    <div className="menu__navbar_links-item">Главная</div>
                    <div className="menu__navbar_links-item">Музыка</div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;