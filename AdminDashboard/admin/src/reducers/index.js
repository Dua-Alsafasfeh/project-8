import {combineReducers} from 'redux';
import loginReducer from './loginRed';

const AllReducers=combineReducers({
    login: loginReducer,    
});
export default AllReducers;