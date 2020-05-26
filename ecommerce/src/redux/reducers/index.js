import { combineReducers } from 'redux';

import app from './app';
import lang from './lang';
import user from './user';
import icons from './icons';

const rootReducer = combineReducers({
    app,
    lang,
    user,
    icons,
});

export default rootReducer;
