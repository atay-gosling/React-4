import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'Header'}>
                <h2>TheMealDbCopy</h2>
                <div>
                    <nav className={'helpNav'}>
                        <Link to={'/'} className={'HeaderLink'}>Home</Link>
                        <Link to={'/about'} className={'HeaderLink'}>About</Link>
                    </nav>
                </div>
        </header>
    );
};

export default Header;