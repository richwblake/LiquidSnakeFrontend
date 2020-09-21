export const setCurrentScore = snakeLength => {
    return {
        type: 'SET_CURRENT_SCORE',
        payload: snakeLength
    }
}