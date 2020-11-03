import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
    name: string;
}

function BarGraph(props: Props) {
    const [widthBar, setWidthBar] = useState();

    async function fetchData() {
        const result = await axios.get('https://raw.githubusercontent.com/ViniSiqueira00/no-hunger/master/src/api/BarGraphData.json');
        const barsGraph = result.data;

        let barPercentage = undefined;
        barsGraph.forEach((bar: any) => {
            if (bar.name === props.name) {
                barPercentage = bar.percentage;
            }
        });

        setWidthBar(barPercentage);
    }

    useEffect(() => {fetchData()});

    return (
        <span className="quantity" style={{width: `${widthBar}%`}}></span>
    );
}

export default BarGraph;
