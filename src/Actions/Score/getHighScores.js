export const getHighScores = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/players')
        .then(data => data.json())
        .then(playerData => dispatch({ type: 'ADD_PLAYERS', payload: playerData.players }))
    }
}