export default (state = {
    currentScore: 0,
    highscores: [[]],
    players: []
}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_SCORE':
            return {
                ...state,
                currentScore: action.payload * 100
            }
        case 'ADD_PLAYERS':
            return {
                ...state,
                players: action.payload
            }
        default:
            return state;
    }
}