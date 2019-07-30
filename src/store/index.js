import { combineReducers } from 'redux';

//全局reducer
import loadingState from './loadingReducer'
import loginState from './loginReducer'



//合并reducer
var rootReducer = combineReducers({
	loadingState,
	loginState
})

export default rootReducer