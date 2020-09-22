import React from 'react';

export default (props) => {
    return(
        <div className='cat-pic'>
            <button onClick={props.getRandomCat}>Get new cat!</button>
            <img src={props.url} alt={props.url}></img>
        </div>
    )
}