import loginReducer from './loginRed'
import { combineReducers } from 'redux'

const AllReducers = combineReducers(
  login: loginReducer,
)
export default AllReducers
