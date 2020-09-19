import React from 'react';

export default (props) => {
    const style = {
        top: `${props.foodCoordinates.shift()}%`,
        left: `${props.foodCoordinates.pop()}%`
    }

    return(
        <div 
        className='food'
        style={style}>
        </div>
    )
}