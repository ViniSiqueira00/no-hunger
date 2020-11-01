import React from 'react';

import BarGraph from '../components/BarGraph';

function Test() {
    return (
        <>
            <h1 style={{border: '1px solid rgba(0,0,0, .1)', margin: '0 0 20px 0', padding: '20px 30px', lineHeight: 1, fontSize: '30px', fontWeight: 700}}>Test radial graph</h1>

            <div id="page-test">
                <BarGraph name="lorem" />
            </div>
        </>
    );
}

export default Test;
