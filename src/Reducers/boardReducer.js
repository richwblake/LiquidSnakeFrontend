import Helpers from '../Helpers';

export default (state = {
    gameIsRunning: false,
    foodCoordinates: Helpers.getRandomCoordinates()
}, action) => {
    switch(action.type) {
        case 'NEW_FOOD':
            return {
                ...state,
                foodCoordinates: Helpers.getRandomCoordinates()
            }
        case 'START_GAME':
            return {
                ...state,
                gameIsRunning: true
            }
        case 'STOP_GAME':
            return {
                ...state,
                gameIsRunning: false
            }
        default:
            return state;
    }
}