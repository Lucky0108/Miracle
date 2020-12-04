/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from '../actions/constants'

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: ''
    },
    error: null,
    authenticating: false,
    authenticate: false,
    message: ''
}

export default(state = initState, action) => {
    console.log(action)
    switch(action.type) {
        case authConstants.LOGIN_REQUEST:
          state = {
              ...state,
              authenticating: true
          }
        break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                authenticating: false,
                authenticate: true
            }
        break;

        case authConstants.LOGIN_FAILURE:
            state = {
                ...initState,
                error: action.payload.message
            }
        break;

        default: return state;
    }

    return state;
}