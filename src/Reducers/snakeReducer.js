export default (
    state = {
        snakePieces: [
            [0, 0],
            [4, 0],
            [8, 0]
        ],
        direction: 'RIGHT',
        velocity: 200
    }, 
    action) => {
    switch(action.type) {
        case 'UPDATE_SNAKE':
            return {
                ...state,
                snakePieces: action.payload
            }
        default:
            return state;
    } 
}