import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import Posts from './posts'

const rootReducer = combineReducers({Posts, form});

export default rootReducer;
