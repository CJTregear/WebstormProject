import React from 'react';
import northernHem from './images/northern_hemisphere.png'
import southernHem from './images/souther_hemisphere.png'


const HemisphereDisplay = ({ latitude }) =>{
    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const picture = latitude > 0 ? northernHem : southernHem;

    return(
    <div>
        <img src={ picture } alt=""/>
        Hey, you are in the `{hemisphere}` Hemisphere!
    </div>
    )
}

export default HemisphereDisplay;
