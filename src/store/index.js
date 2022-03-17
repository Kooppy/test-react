import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { contactReducers } from './reducers/contactReducers';

const rootReducer = combineReducers({
    message: contactReducers,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // dev
// export const store = createStore(rootReducer); // Prod