export const submitPlayerScore = player => {
    return (dispatch) => {
        fetch('http://localhost:3000/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                player: player
            })
        })
    }
}