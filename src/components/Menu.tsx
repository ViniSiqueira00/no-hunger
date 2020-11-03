import React from 'react';
import {Link} from 'react-router-dom';

import imagotype from '../images/imagotype-white.svg';
import isotype from '../images/isotype-white.svg';
import facebookIcon from '../images/social-facebook.svg';
import instagramIcon from '../images/social-instagram.svg';
import linkedinIcon from '../images/social-linkedin.svg';
import behanceIcon from '../images/social-behance.svg';

interface MenuProps {
    style?: object;
    state: {
        variable: boolean;
        setter: React.Dispatch<React.SetStateAction<boolean>>
    }
}

function Menu(props: MenuProps) {
    function handleCloseMenu() {
        props.state.setter(false);
    }

    return (
        <section id="menu" style={props.style}>
            <img className="mark" src={isotype} alt="isotype for base rock"/>

            <div className="header">
                <div className="imagotype">
                    <img src={imagotype} alt="imagotype for base rock"/>
                </div>
                <div className="menu-icon" onClick={handleCloseMenu}>
                    <p>fechar</p>
                    <span className="icon">
                        <span></span>
                        <span></span>
                    </span>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="texts">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum. Pellentesque vel rhoncus elit, in lacinia augue.</p>
                    <p>Nulla lacus nisi, mollis laoreet eros eu, vehicula efficitur turpis. Proin quis feugiat arcu. Quisque ac finibus leo. Aliquam nec est eget magna hendrerit gravida.</p>
                </div>

                <div className="socials">
                    <img src={facebookIcon} alt="facebook icon"/>
                    <img src={instagramIcon} alt="instagram icon"/>
                    <img src={linkedinIcon} alt="linkedin icon"/>
                    <img src={behanceIcon} alt="behance icon"/>
                </div>

                <div className="links">
                    <Link to="/about" className="link">
                        <div className="label">
                            <p>01.</p>
                            <span></span>
                        </div>

                        <p className="word">about</p>
                    </Link>

                    <Link to="/pictures" className="link">
                        <div className="label">
                            <p>02.</p>
                            <span></span>
                        </div>

                        <p className="word">pictures</p>
                    </Link>

                    <Link to="/members" className="link">
                        <div className="label">
                            <p>03.</p>
                            <span></span>
                        </div>

                        <p className="word">members</p>
                    </Link>

                    <Link to="/contribute" className="link">
                        <div className="label">
                            <p>04.</p>
                            <span></span>
                        </div>

                        <p className="word">contributes</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Menu;
