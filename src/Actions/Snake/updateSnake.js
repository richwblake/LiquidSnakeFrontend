export const updateSnake = snakePieces => {
    return {
        type: 'UPDATE_SNAKE',
        payload: snakePieces
    }
}