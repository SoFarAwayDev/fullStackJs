/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import mii from './modules/Mii/MiiReducer';
import about from './modules/About/AboutReducer';

// Combine all reducers into one root reducer
export default combineReducers({
    mii,
    about
});