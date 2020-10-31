import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';

function RadialGraph() {
    const [graphData, setGraphData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('https://raw.githubusercontent.com/ViniSiqueira00/no-hunger/master/src/api/radialGraphData.json');
            console.log(result);
            setGraphData(result.data);
            return result;
        }

        fetchData();
    }, [])

    // const data = {
    //     labels: ['red', 'green', 'blue'],
    //     datasets: [{
    //         data: [25, 25, 50],
    //         backgroundColor: ['#D6D1C9', '#C9C1B0', '#9C6F69'],
    //     }],
    // }

    return (
        <Pie
            data={{}}
            width={1}
            height={1}
            options={{
                legend: false,
                responsiveAnimationDuration: 0,
                maintainApectRatio: false,
                aspectRatio: 1,
            }}
        />
    );
}

export default RadialGraph;
