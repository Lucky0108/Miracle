/* eslint-disable import/no-anonymous-default-export */
import { authConstants, signupConstants } from '../actions/constants'

const initState = {
    token: null,
    user: {
        _id: "" ,
        firstName: "", 
        lastName: "", 
        fullName: "", 
        email: "", 
        user_name: "", 
        contact: "", 
        blogs: "", 
        role: "", 
        funFact: "", 
        socialLinks: ""
    },
    error: null,
    authenticating: false,
    authenticate: false,
    message: '',
    loading: '',
    success: false
}

export default (state = initState, action) => {
    console.log(action)
    switch(action.type) {
        case signupConstants.SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break;

        case signupConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
        break;

        case signupConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
        break;

        case authConstants.LOGIN_REQUEST:
          state = {
              ...state,
              authenticating: true,
              loading: true
          }
        break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                message: "Logged In Successfully!",
                token: action.payload.token,
                user: action.payload.user,
                authenticating: false,
                authenticate: true,
                loading: false,
            }
        break;

        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                authenticating: false,
                error: action.payload.error,
                loading: false
            }
        break;

        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break;

        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState,
                loading: false,
                success: true
            }
        break;

        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.message
            }
        break;

        default: return state;
    }

    return state;
}