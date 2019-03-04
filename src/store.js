import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'; 
// import {rootReducer} from "./reducers/index";

export const store =createStore(reducers,applyMiddleware(ReduxThunk));