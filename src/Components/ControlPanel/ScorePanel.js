import React from 'react';

export default (props) => {
    return(
        <div className='score-panel'>
            <h1>Score:</h1>
            <h2>{props.currentScore}</h2>
        </div>
    )
}