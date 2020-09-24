import React from 'react';

export default (props) => {
    const scoreList = props.players.map(player => {
        return <h2 key={player.id}>{player.name}: {player.score}</h2>
    })
    return(
        <div className='score-list'>
            {scoreList}
        </div>
    )
}