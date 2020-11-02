import React, { useState } from 'react';

import Menu from './Menu';

import imagotype from '../images/imagotype.svg';
import menuIcon from '../images/menu-icon.svg';

function Header() {
     const [menuOpened, setMenuOpened] = useState<boolean>(false);

     function handleOpenMenu() {
          setMenuOpened(true);
     }

     return (
          <header id="header">
               <div className="imagotype">
                    <img src={imagotype} alt="imagotype for base rock"/>
               </div>
               <div className="menu-icon" onClick={handleOpenMenu}>
                    <p>menu</p>
                    <img src={menuIcon} alt="menu icon" />
               </div>

               {menuOpened ? <Menu state={{variable: menuOpened, setter: setMenuOpened}}/> : null}
          </header>
     );
}

export default Header;