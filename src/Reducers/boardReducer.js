import Helpers from '../Helpers';

export default (state = {
    foodCoordinates: Helpers.getRandomCoordinates()
}, action) => {
    switch(action) {
        default:
            return state;
    }
}