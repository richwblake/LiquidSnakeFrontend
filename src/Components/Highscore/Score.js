import React from 'react';

export default (props) => {
    const scoreList = props.players.map(player => {
        return <h1 key={player.id}>{player.name}: {player.score}</h1>
    })
    return(
        <div className='score-list'>
            {scoreList}
        </div>
    )
}