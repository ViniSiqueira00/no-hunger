import React from 'react';

import RadialGraph from '../components/RadialGraph';

function Test() {
    return (
        <div id="page-test">
            <RadialGraph data={[
                {
                    angle: 25,
                    label: '25%',
                    style: {
                        fill: '#D6D1C9',
                        stroke: 'none'
                    }
                },
                {
                    angle: 25,
                    label: '25%',
                    style: {
                        fill: '#C9C1B0',
                        stroke: 'none'
                    }
                },
                {
                    angle: 50,
                    label: '50%',
                    style: {
                        fill: '#9C6F69',
                        stroke: 'none'
                    }
                }
            ]} />
        </div>
    );
}

export default Test;
