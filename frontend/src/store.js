import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;