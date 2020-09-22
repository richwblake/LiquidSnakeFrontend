export default (state = {
    currentScore: 0,
    highscores: [[]]
}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_SCORE':
            return {
                ...state,
                currentScore: action.payload * 100
            }
        default:
            return state;
    }
}