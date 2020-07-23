import reducer from './reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
