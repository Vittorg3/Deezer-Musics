import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import PlayerReducer from './PlayerReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
    user: UserReducer,
    player: PlayerReducer,
    search: SearchReducer
});