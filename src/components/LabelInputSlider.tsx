import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

interface Props {
    children: React.ReactElement;
    open: boolean;
    value: number;
}

function LabelInputSlider({ children, open, value }: Props) {
    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={`$${value}k`}>
            {children}
        </Tooltip>
    );
}

export default LabelInputSlider;
