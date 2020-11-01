import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
    name: string;
}

function BarGraph(props: Props) {
    const [widthBar, setWidthBar] = useState();

    async function fetchData() {
        const result = await axios.get('https://raw.githubusercontent.com/ViniSiqueira00/no-hunger/master/src/api/barGraphData.json');
        const barsGraph = result.data;

        let barQuantity = undefined;
        barsGraph.forEach((bar: any) => {
            if (bar.label === props.name) {
                barQuantity = bar.angle;
            }
        });

        setWidthBar(barQuantity);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <span className="quantity" style={{width: `${widthBar}%`}}></span>
    );
}

export default BarGraph;
