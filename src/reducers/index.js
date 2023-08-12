import { combineReducers } from 'redux';
import { reducers as financiesReducers } from './financies.reducer';

const reducers = combineReducers({
  financiesReducers,
});

export { reducers };
