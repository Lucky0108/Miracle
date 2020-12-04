import authReducer from './auth.reducer'
import userReducer from './userSignup.reducer'
import {reducer as toastrReducer} from 'react-redux-toastr'
const { combineReducers } = require("redux");

const rootReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    toastr: toastrReducer 
})

export default rootReducers