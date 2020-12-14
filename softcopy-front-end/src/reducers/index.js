import authReducer from './auth.reducer'
import userReducer from './userSignup.reducer'
import newsReducer from './newsletter.reducer'
import contactReducer from './contact.reducer'
import {reducer as toastrReducer} from 'react-redux-toastr'
const { combineReducers } = require("redux");

const rootReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    news: newsReducer,
    contact: contactReducer,
    toastr: toastrReducer 
})

export default rootReducers