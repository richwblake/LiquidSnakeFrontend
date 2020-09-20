import Helpers from '../Helpers';

export default (state = {
    foodCoordinates: Helpers.getRandomCoordinates()
}, action) => {
    switch(action.type) {
        case 'NEW_FOOD':
            return {
                ...state,
                foodCoordinates: Helpers.getRandomCoordinates()
            }
        default:
            return state;
    }
}