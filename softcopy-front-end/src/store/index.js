import { applyMiddleware , createStore } from 'redux'
import thunk from 'redux-thunk'
// import rootReducers from '../reducers';
import authReducer from '../reducers/auth.reducer'

const store = createStore(authReducer, applyMiddleware(thunk))

export default store;