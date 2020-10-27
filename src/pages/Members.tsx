import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import MemberBox from '../components/MemberBox';

import profile01 from '../images/profile-01.png';
import profile02 from '../images/profile-02.png';
import profile03 from '../images/profile-03.png';
import profile04 from '../images/profile-04.png';
import profile05 from '../images/profile-05.png';
import profile06 from '../images/profile-06.png';
import profile07 from '../images/profile-07.png';

function Members() {
    return (
        <div id="page-members">
            <Header />

            <main className="content">
                <LandingPage number="03" title={['who', 'we are']}>
                    Nunc a odio id magna pharetra lacinia non quis
                    <br/> orci. In consequat nisi  rutrum. Pellentesque
                    <br/> vel rhoncus elit.
                </LandingPage>

                <section className="list">
                    <MemberBox image={profile01} name="Frederico Bulhosa Abelho">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum.
                    </MemberBox>

                    <MemberBox image={profile02} name="Tainara Semedo Abrantes">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum.
                    </MemberBox>

                    <MemberBox image={profile03} name="Jack Tuna Montenegro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum.
                    </MemberBox>

                    <MemberBox image={profile04} name="Ariele Queiroga Abasto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum.
                    </MemberBox>

                    <MemberBox image={profile05} name="Isabelly Sales Regodeiro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum.
                    </MemberBox>

                    <MemberBox image={profile06} name="Wilson Coronel Neves">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum.
                    </MemberBox>

                    <MemberBox image={profile07} name="Aicha Cerqueira Pacheco">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio id magna pharetra lacinia non quis orci. In consequat nisi eu ante commodo, dignissim euismod quam rutrum.
                    </MemberBox>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Members;
