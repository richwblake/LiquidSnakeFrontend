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
    switch(action) {
        default:
            return state;
    } 
}