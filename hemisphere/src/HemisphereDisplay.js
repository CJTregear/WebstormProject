import React from 'react';
import './hemisphere.css';
import northernHem from './images/northern_hemisphere.png'
import southernHem from './images/souther_hemisphere.png'

const hemisphereConfig = {
    Northern: {
        text: 'It is northern hemisphere',
        picture: northernHem
    },
    Southern: {
        text: 'It is southern hemisphere',
        picture: southernHem
    }
}

const HemisphereDisplay = ({ latitude }) =>{
    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    // const picture = latitude > 0 ? northernHem : southernHem;

    const {text, picture} = hemisphereConfig[hemisphere]

    return(
        <div className={hemisphere}>
        <img src={ picture } alt=""/>
        Hey, you are in the `{hemisphere}` Hemisphere!
    </div>
    )
}

export default HemisphereDisplay;
