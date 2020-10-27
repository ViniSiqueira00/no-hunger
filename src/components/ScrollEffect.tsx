import React from 'react';

import arrowTop from '../images/arrow-top.svg';

function ScrollEffect() {
    return (
        <div className="scroll-effect">
            <img src={arrowTop} alt="arrow to top icon"/>
            <span className="mouse">
                <span className="scroll"></span>
            </span>
        </div>
    )
}

export default ScrollEffect;
