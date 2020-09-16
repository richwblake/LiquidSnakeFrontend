import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import snakeReducer from './snakeReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
    board: boardReducer,
    snake: snakeReducer,
    score: scoreReducer
});

