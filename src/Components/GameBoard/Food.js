import React from 'react';

export default (props) => {
    const style = {
        top: `${props.foodCoordinates[1]}%`,
        left: `${props.foodCoordinates[0]}%`
    }

    return(
        <div 
        className='food'
        style={style}>
        </div>
    )
}