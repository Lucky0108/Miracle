import { contactConstants } from "../actions/constants"

/* eslint-disable import/no-anonymous-default-export */
const initState = {
    message: '',
    error: '',
    loading: ''
}

export default (state = initState, action) => {
    switch(action.type) {
        case contactConstants.CONTACT_REQUEST: 
            state = {
                ...state,
                loading: true
            }
        break;

        case contactConstants.CONTACT_SUCCESS:
            state = {
                ...state,
                message: action.payload.message,
                loading: "Done"
            }
        break;

        case contactConstants.CONTACT_FAILURE:
            state = {
                ...initState,
                error: action.payload.message,
                loading: "Failed"
            }
        break;

        default: return state;
    }

    return state;
}