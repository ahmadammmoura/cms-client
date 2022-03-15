import { createStore, combineReducers,applyMiddleware } from 'redux';
import auth from './reducers/auth';
import customerReducer from './reducers/customer';
import thunk from "redux-thunk"
const reducers = combineReducers({auth,customerReducer});


export default createStore(reducers,applyMiddleware(thunk));