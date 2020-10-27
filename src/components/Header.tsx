import React from 'react';

import imagotype from '../images/imagotype.svg';
import menuIcon from '../images/menu-icon.svg';

function Header() {
     return (
          <header id="header">
               <div className="imagotype">
                    <img src={imagotype} alt="imagotype for base rock"/>
               </div>
               <div className="menu-icon">
                    <p>menu</p>
                    <img src={menuIcon} alt="menu icon" />
               </div>
          </header>
     );
}

export default Header;