import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';

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
            </main>

            <Footer />
        </div>
    );
}

export default Contribute;
