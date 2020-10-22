import React from 'react';
import Logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
           <div className='text-center'>
              <img className='p2-5' src={Logo} alt="" />
           </div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/shop">Shop <span class="sr-only">(current)</span></a>
                        </li>
                     
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/review">Order Review</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/inventory">Manage Inventory</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;