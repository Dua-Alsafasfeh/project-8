import { combineReducers } from 'redux'
import userReducer from './usersRed'
import  loginReducer  from './loginRed'


export default combineReducers({ // To collect all the reducers
  users: userReducer,
  login: loginReducer,
})