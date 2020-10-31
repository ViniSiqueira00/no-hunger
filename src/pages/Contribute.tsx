import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';

import RadialGraph from '../components/RadialGraph';
import BarGraph from '../components/BarGraph';

function Contribute() {
    return (
        <div id="page-contribute">
            <Header />

            <main className="content">
                <LandingPage number="04" title={['how you', 'can help']}>
                    Nunc a odio id magna pharetra lacinia non quis
                    <br/> orci. In consequat nisi eu ante
                    <br/> commodo.
                </LandingPage>

                <section className="informations">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum. Pellentesque vel rhoncus elit, in lacinia augue. Aenean ornare blandit metus in bibendum. Sed vulputate ornare est.</p>
                        <p>Nullam quis mauris neque. Nunc eget mauris tempor sapien consequat rutrum vel et arcu. Quisque felis ipsum, fermentum a pulvinar at, interdum ac dui. Sed lacinia scelerisque pulvinar.</p>
                    </div>
                    <div className="graphic" id="graphic">
                        <RadialGraph />
                    </div>
                </section>

                <section className="statistics">
                    <div className="statistic">
                        <label className="texts">
                            <p className="principal">2x vehicula efficitur turpis</p>
                            <p className="secondary">vehicula efficitur turpis</p>
                        </label>
                        <div className="bars">
                            <span className="total"></span>
                            <BarGraph name='teste'/>
                        </div>
                    </div>
                    <div className="statistic">
                        <label className="texts">
                            <p className="principal">4,5x quis feugiat arcu</p>
                            <p className="secondary">quis feugiat arcu</p>
                        </label>
                        <div className="bars">
                            <span className="total"></span>
                            <span className="quantity"></span>
                        </div>
                    </div>
                    <div className="statistic">
                        <label className="texts">
                            <p className="principal">HIGT pharetra lacinia</p>
                            <p className="secondary">pharetra lacinia</p>
                        </label>
                        <div className="bars">
                            <span className="total"></span>
                            <span className="quantity"></span>
                        </div>
                    </div>
                </section>

                <section className="contribute">
                    <div className="title">
                        <span className="bar"></span>
                        <h1 className="text">contribute</h1>
                    </div>

                    <form>
                        <input id="control-system-payment" type="checkbox"/>

                        <div className="column first-column">
                            <input className="full" type="text" placeholder="Full Name"/>
                            <input className="full" type="text" placeholder="E-mail"/>
                            <input className="full" type="text" placeholder="Phone"/>
                            <textarea className="full" placeholder="Message"></textarea>
                        </div>

                        <div className="column second-column">
                            <div className="wrapper">
                                <div className="input-checkbox">
                                    <span className="checkbox">
                                        <span></span>
                                    </span>
                                    <label htmlFor="control-system-payment">Contribute financially</label>
                                </div>
                                <div className="input-slider">
                                    <div className="labels">
                                        <label>$0</label>
                                        <label>$10k</label>
                                    </div>
                                    <div className="slider">
                                        <span className="total"></span>
                                        <span className="quantity">
                                            <span className="bar"></span>
                                            <span className="sphere"></span>
                                        </span>
                                    </div>
                                </div>
                                <input className="full" type="text" placeholder="Card Number"/>
                                <div className="input-group">
                                    <input className="semi" type="text" placeholder="Card Valid Date"/>
                                    <input className="semi" type="text" placeholder="CVV"/>
                                </div>
                            </div>
                            <button>Contribute now!</button>
                        </div>
                    </form>

                    <p className="policies">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum. Pellentesque vel rhoncus elit, in lacinia augue. Aenean ornare blandit metus in bibendum. Sed vulputate ornare est. Nullam quis mauris neque. Nunc eget mauris tempor sapien consequat rutrum vel et arcu. Quisque felis ipsum, fermentum a pulvinar at, interdum ac dui. Sed lacinia scelerisque pulvinar.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Contribute;
