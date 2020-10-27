import React from 'react';

import ScrollEffect from '../components/ScrollEffect';
import LineDivisor from '../components/LineDivisor';

interface LandingPageProps {
    number: string;
    title: string[];
    children: React.ReactNode;
}

function LandingPage(props: LandingPageProps) {
    return (
        <>
            <section className="landing">
                <h1 className="number-title">{props.number}.</h1>

                <div className="box">
                    <h1 className="text-title">
                        {props.title.map((title, index) => (index === 0 ? <>{title}</> : <><br/> {title}</>))}
                    </h1>

                    <p className="description">
                        {props.children}
                    </p>

                    <ScrollEffect />
                </div>
            </section>


            <LineDivisor />
        </>
    )
}

export default LandingPage;
