import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

function RadialGraph() {
    const [graphData, setGraphData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('https://raw.githubusercontent.com/ViniSiqueira00/no-hunger/master/src/api/PieGraphData.json');
            
            setGraphData(result.data);
        }

        fetchData();
    }, [])

    return (
        <Pie
            data={graphData}
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
