import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';

import banner from '../images/banner-03.png';
import myanmar from '../images/myanmar.png';
import children from '../images/children.png';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="page-about">
            <Header />

            <main className="content">
                <LandingPage number="01" title={['about', 'us']}>
                    Nunc a odio id magna pharetra lacinia
                    <br/> non quis orci. In consequat
                    <br/> nisi eu ante commodo,
                    <br/> dignissim euismod quam
                    <br/> rutrum. Pellentesque
                    <br/> vel rhoncus elit.
                </LandingPage>

                <section className="effect-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum. Pellentesque vel rhoncus elit, in lacinia augue. Aenean ornare blandit metus in bibendum. Sed vulputate ornare est. Nullam quis mauris neque. Nunc eget mauris tempor sapien consequat rutrum vel et arcu. Quisque felis ipsum, fermentum a pulvinar at, interdum ac dui. Sed lacinia scelerisque pulvinar. Nulla lacus nisi, mollis laoreet eros eu, vehicula efficitur turpis. Proin quis feugiat arcu. Quisque ac finibus leo. Aliquam nec est eget magna hendrerit gravida.</p>
                </section>

                <section className="banner">
                    <img src={banner} alt="banner"/>
                </section>

                <section className="informations">
                    <div className="info-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum. Pellentesque vel rhoncus elit, in lacinia augue. Aenean ornare blandit metus in bibendum. Sed vulputate ornare est.</p>
                        <p>Nullam quis mauris neque. Nunc eget mauris tempor sapien consequat rutrum vel et arcu. Quisque felis ipsum, fermentum a pulvinar at, interdum ac dui. Sed lacinia scelerisque pulvinar. Nulla lacus nisi, mollis laoreet eros eu, vehicula efficitur turpis. Proin quis feugiat arcu. Quisque ac finibus leo. Aliquam nec est eget magna hendrerit gravida.</p>
                    </div>
                    <div className="topics">
                        <div className="topic">
                            <p className="number">01.</p>
                            <span className="line"></span>
                            <p className="word">Magna</p>
                        </div>
                        <div className="topic">
                            <p className="number">02.</p>
                            <span className="line"></span>
                            <p className="word">Lacinia</p>
                        </div>
                        <div className="topic">
                            <p className="number">03.</p>
                            <span className="line"></span>
                            <p className="word">Rutrum</p>
                        </div>
                        <div className="topic">
                            <p className="number">04.</p>
                            <span className="line"></span>
                            <p className="word">Bibendum</p>
                        </div>
                    </div>
                </section>

                <section className="pictures">
                    <img className="picture-01" src={myanmar} alt="banner"/>
                    <img className="picture-02" src={children} alt="banner"/>
                    <p>Nullam quis mauris neque. Nunc eget mauris tempor sapien consequat rutrum vel et arcu. Quisque felis ipsum, fermentum a pulvinar at, interdum ac dui. Sed lacinia scelerisque pulvinar. Nulla lacus nisi, mollis laoreet eros eu, vehicula efficitur turpis. Proin quis feugiat arcu. Quisque ac finibus leo. Aliquam nec est eget magna hendrerit gravida.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default About;
