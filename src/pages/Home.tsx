import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import ScrollEffect from '../components/ScrollEffect';
import Menu from '../components/Menu';
import RadialGraph from '../components/RadialGraph';
import BarGraph from '../components/BarGraph';

import isotypeBrown from '../images/isotype-brown.svg';
import coverBanner from '../images/banner-01.png';
import pictureBanner from '../images/banner-02.png';
import arrowRightBrown from '../images/arrow-right-brown.svg';
import arrowRightWhite from '../images/arrow-right-white.svg';

function Home() {
    return (
        <div id="page-home">
            <ProgressBar />

            <Header />

            <main className="content">
                <section className="landing">
                    <div className="texts">
                        <div className="words">
                            <p className="line">ornare.</p>
                            <p className="line">rhoncus.</p>
                            <p className="line">ornarefin.</p>
                            <span className="icon-line">
                                <img src={isotypeBrown} alt="isotype for base rock"/>
                                <p className="line">adipiscing.</p>
                            </span>
                        </div>

                        <ScrollEffect />
                    </div>

                    <div className="banner">
                        <img src={coverBanner} alt="grainy photography with a group of black boys"/>
                    </div>
                </section>

                <section className="first-point">
                    <div className="water-mark">
                        <img src={isotypeBrown} alt="water mark"/>
                    </div>
                    <Link to="/about" className="button">
                        <p>aliquam nec</p>
                        <img src={arrowRightBrown} alt="arrow to right icon"/>
                    </Link>
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
                    <div className="container">
                        <div className="box">
                            <div className="text">
                                <h1>02.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum. Pellentesque vel rhoncus elit, in lacinia augue.</p>
                            </div>
                            <Link to="/pictures" className="button">
                                <p>euismod quam rutrum</p>
                                <img src={arrowRightWhite} alt="arrow to right icon"/>
                            </Link>
                        </div>
                    </div>
                    <div className="image">
                        <img src={pictureBanner} alt="banner"/>
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
                                <div className="bars">
                                    <span className="total"></span>
                                    <BarGraph name='lorem'/>
                                </div>
                            </div>
                            <div className="box-bar">
                                <label>4,5x quis feugiat arcu</label>
                                <div className="bars">
                                    <span className="total"></span>
                                    <BarGraph name='efficitur'/>
                                </div>
                            </div>
                            <div className="box-bar">
                                <label>HIGT pharetra lacinia</label>
                                <div className="bars">
                                    <span className="total"></span>
                                    <BarGraph name='lacinia'/>
                                </div>
                            </div>
                        </div>
                        <Link to="/contribute" className="button">
                            <p>Aliquam nec</p>
                            <img src={arrowRightBrown} alt="arrow to right icon"/>
                        </Link>
                    </div>
                    <div className="graphic" id="graphic">
                        <RadialGraph />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
