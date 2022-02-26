import './Navbar.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ onSubmit }) => {
    return(
        <nav className="navbar">
            <div className="container-fluid">
                <div className='d-flex align-items-center text-white'>
                    <i className="bi bi-youtube"></i> 
                    <h3 className='m-0 p-0'>Youtube</h3>
                </div>
                
                <SearchBar onNextSubmit={onSubmit}/>

                <div className="icons">
                    <i className="bi bi-camera-video"></i> 
                    <i className="bi bi-columns-gap"></i> 
                    <i className="bi bi-bell"></i> 
                    <i className="bi bi-person"></i> 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;