import React from 'react';
import {RadialChart} from 'react-vis';

interface GraphData {
    angle: number;
    label: string;
    style?: React.CSSProperties;
}

interface ObjectProps {
    data: GraphData[];
}

function RadialGraph(props : ObjectProps) {
    return (
        <div id="radial-chart">
            <RadialChart
                data={props.data}
                width={500}
                height={500} />
        </div>
    );
}

export default RadialGraph;
