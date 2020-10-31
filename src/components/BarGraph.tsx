import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
    name: string
}

function BarGraph(props: Props) {
    const [widthBar, setWidthBar] = useState();

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('https://raw.githubusercontent.com/ViniSiqueira00/no-hunger/master/src/api/barGraphData.json');
            const percentage = result['data'].map((data: any) => {
                if (data.label === props.name){
                    return data.angle;
                }
            });

            console.log(percentage);

            setWidthBar(percentage);
        }

        fetchData();
    }, []);

    return (
        <span className="quantity new"></span>
    );
}

export default BarGraph;
