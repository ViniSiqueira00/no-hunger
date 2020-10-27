import React from 'react';

import arrowRightBrown from '../images/arrow-right-brown.svg';

interface MemberBoxProps {
    image: string;
    name: string;
    children: React.ReactNode;
}

function MemberBox (props: MemberBoxProps) {
    return (
        <div className="member-box">
            <div className="image">
                <img src={props.image} alt={`perfil for ${props.name}`}/>
            </div>
            <div className="content-wrapper">
                <h3>{props.name}</h3>
                <p>{props.children}</p>
                <span>
                    Ante commodo
                    <img src={arrowRightBrown} alt="arrow right"/>
                </span>
            </div>
        </div>
    )
}

export default MemberBox;
