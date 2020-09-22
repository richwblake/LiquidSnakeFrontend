import React from 'react';

export default (props) => {
    const scoreList = props.players.map(player => {
        return <h1 key={player.id} style={{ color: '#b4e5af' }}>{player.name}: {player.score}</h1>
    })
    return(
        <div>
            {scoreList}
        </div>
    )
}