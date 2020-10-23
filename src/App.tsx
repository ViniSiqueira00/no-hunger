import React from 'react';

import imagotype from './images/imagotype.svg';
import isotypeBrown from './images/isotype-brown.svg';
import isotypeWhiteMark from './images/isotype-white-mark.svg';
import menuIcon from './images/menu-icon.svg';
import arrowTop from './images/arrow-top.svg';
import coverBanner from './images/banner-01.png';
import arrowRightBrown from './images/arrow-right-brown.svg';
import arrowRightWhite from './images/arrow-right-white.svg';
import facebookIcon from './images/social-facebook.svg';
import instagramIcon from './images/social-instagram.svg';
import linkedinIcon from './images/social-linkedin.svg';
import behanceIcon from './images/social-behance.svg';

function App() {
    return (
        <div id="page-home">
            <div className="progress-bar">
                <div className="progress">
                    <div className="labels">
                        <p>01.</p>
                        <p>02.</p>
                        <p>03.</p>
                        <p>04.</p>
                    </div>
                    <div className="bars">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <header id="header">
                <div className="imagotype">
                    <img src={imagotype} alt="imagotype for base rock"/>
                </div>
                <div className="menu-icon">
                    <p>menu</p>
                    <img src={menuIcon} alt="menu icon" />
                </div>
            </header>

            <main className="content">
                <section className="landing">
                    <div className="texts">
                        <p className="line">ornare.</p>
                        <p className="line">rhoncus.</p>
                        <p className="line">ornarefin.</p>
                        <span className="icon-line">
                            <img src={isotypeBrown} alt="isotype for base rock"/>
                            <p>adipiscing.</p>
                        </span>
                    </div>

                    <div className="scroll-effect">
                        <img src={arrowTop} alt="arrow to top icon"/>
                        <span className="mouse">
                            <span className="scroll"></span>
                        </span>
                    </div>
                </section>

                <section className="cover-banner">
                    <img src={coverBanner} alt="grainy photography with a group of black boys"/>
                </section>

                <section className="first-point">
                    <div className="water-mark">
                        <img src={isotypeWhiteMark} alt="water mark"/>
                    </div>
                    <div className="button">
                        <p>aliquam nec</p>
                        <img src={arrowRightBrown} alt="arrow to right icon"/>
                    </div>
                    <div className="text">
                        <h1>01.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum. Pellentesque vel rhoncus elit, in lacinia augue. Aenean ornare blandit metus in bibendum. Sed vulputate ornare est.
                            <br/><br/>
                            Nullam quis mauris neque. Nunc eget mauris tempor sapien consequat rutrum vel et arcu. Quisque felis ipsum, fermentum a pulvinar at, interdum ac dui. Sed lacinia scelerisque pulvinar. Nulla lacus nisi, mollis laoreet eros eu, vehicula efficitur turpis. Proin quis feugiat arcu. Quisque ac finibus leo. Aliquam nec est eget magna hendrerit gravida.
                        </p>
                    </div>
                </section>

                <section className="second-point">
                    <div className="box">
                        <div className="text">
                            <h1>02.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum. Pellentesque vel rhoncus elit, in lacinia augue.</p>
                        </div>
                        <div className="button">
                            <p>euismod quam rutrum</p>
                            <img src={arrowRightWhite} alt="arrow to right icon"/>
                        </div>
                    </div>
                </section>

                <section className="third-point">
                    <h1>03.</h1>
                    <h2>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</h2>
                    <p>Lorem ipsum</p>
                </section>

                <section className="fourth-point">
                    <div className="texts">
                        <h1>04.</h1>
                        <p>
                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
                            <br/><br/>
                            Nunc a odio id magna pharetra lacinia non quis orci. Nulla lacus nisi, mollis laoreet eros eu, vehicula efficitur turpis. Proin quis feugiat arcu.
                        </p>
                        <div className="bars">
                            <div className="box-bar">
                                <label>2x vehicula efficitur turpis</label>
                                <span className="bar">
                                    <span className="quantity-67"></span>
                                </span>
                            </div>
                            <div className="box-bar">
                                <label>4,5x quis feugiat arcu</label>
                                <span className="bar">
                                    <span className="quantity-94"></span>
                                </span>
                            </div>
                            <div className="box-bar">
                                <label>HIGT pharetra lacinia</label>
                                <span className="bar">
                                    <span className="quantity-40"></span>
                                </span>
                            </div>
                        </div>
                        <div className="button">
                            <p>Aliquam nec</p>
                            <img src={arrowRightBrown} alt="arrow to right icon"/>
                        </div>
                    </div>
                    <div className="graphic-pizza">
                        X
                    </div>
                </section>
            </main>

            <footer id="footer">
                <div className="social-media">
                    <img src={facebookIcon} alt="facebook icon"/>
                    <img src={instagramIcon} alt="instagram icon"/>
                    <img src={linkedinIcon} alt="linkedin icon"/>
                    <img src={behanceIcon} alt="behance icon"/>
                </div>
                <p className="link">terms & conditions</p>
                <p className="copyright">© COPYRIGHT nunc a odio id magna pharetra lacinia 2020</p>
            </footer>
        </div>
    );
}

export default App;
