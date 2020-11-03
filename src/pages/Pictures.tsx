import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import LineDivisor from '../components/LineDivisor';

import picture01 from '../images/picture-01.png';
import picture02 from '../images/picture-02.png';
import picture03 from '../images/picture-03.png';
import picture04 from '../images/picture-04.png';
import picture06 from '../images/picture-06.png';
import picture07 from '../images/picture-07.png';
import picture08 from '../images/picture-08.png';
import isotypeBrown from '../images/isotype-brown.svg';
import arrowRightBrown from '../images/arrow-right-brown.svg';

function Pictures() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="page-pictures">
            <Header />

            <main className="content">
                <LandingPage number="02" title={['our', 'pictures']}>
                    Nunc a odio id magna pharetra lacinia non quis
                    <br/> orci. In consequat nisi eu ante commodo
                    <br/> dignissim euismod quam rutrum,
                    <br/> Pellentesque vel rhoncus elit.
                </LandingPage>

                <section className="grid">
                    <div className="picture">
                        <img src={picture01} alt="pictures"/>
                    </div>
                    <div className="picture">
                        <img src={picture02} alt="pictures"/>
                    </div>
                    <div className="picture">
                        <img src={picture03} alt="pictures"/>
                    </div>
                    <div className="picture">
                        <img src={picture04} alt="pictures"/>
                    </div>
                    <div className="picture">
                        <img src={picture06} alt="pictures"/>
                    </div>
                    <div className="picture">
                        <img src={picture07} alt="pictures"/>
                    </div>
                    <div className="picture">
                        <img src={picture08} alt="pictures"/>
                    </div>
                    <div className="button">
                        <div>
                            <img className="isotype" src={isotypeBrown} alt="isotype"/>
                            <p className="text">dolor sit amet</p>
                            <img className="arrow" src={arrowRightBrown} alt="arrow"/>
                        </div>
                    </div>
                </section>

                <LineDivisor />

                <section className="effect-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum. Pellentesque vel rhoncus elit, in lacinia augue. Aenean ornare blandit metus in bibendum. Sed vulputate ornare est. Nullam quis mauris neque. Nunc eget mauris tempor sapien consequat rutrum vel et arcu. Quisque felis ipsum, fermentum a pulvinar at, interdum ac dui. Sed lacinia scelerisque pulvinar. Nulla lacus nisi, mollis laoreet eros eu, vehicula efficitur turpis. Proin quis feugiat arcu. Quisque ac finibus leo. Aliquam nec est eget magna hendrerit gravida.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Pictures;
