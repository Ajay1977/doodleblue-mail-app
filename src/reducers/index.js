import { combineReducers } from 'redux';
import accReducer from './accReducer';
import mailReducer from './mailReducer';

const rootReducer = combineReducers({
    accReducer,
    mailReducer
});

export default rootReducer;