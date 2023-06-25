import React from 'react';

const HemisphereDisplay = ({ latitude }) =>{
    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    return(
    <div>
        Hey, you are in the `{hemisphere}` Hemisphere!
    </div>
    )
}

export default HemisphereDisplay;
