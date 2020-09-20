import Helpers from '../Helpers';

export default (
    state = Helpers.getInitialState(), 
    action) => {
    switch(action.type) {
        case 'UPDATE_SNAKE':
            return {
                ...state,
                snakePieces: action.payload
            }
        case 'RESET_SNAKE':
            return Helpers.getInitialState();
        default:
            return state;
    } 
}