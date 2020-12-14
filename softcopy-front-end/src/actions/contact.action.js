import axios from "../helpers/axios"
import { contactConstants } from "./constants"

export const contactAction = (details) => {
    return (dispatch) => {

        dispatch({ type: contactConstants.CONTACT_REQUEST })
        const res = axios.post('/contact', { ...details })

        res.then(response => {
            if (response.status === 201) {
            dispatch({ type: contactConstants.CONTACT_SUCCESS,
                payload:{ message: response.data.message } 
            })
            }
        })

        res.catch((error) => {
            if(error.response) {
                if(error.response.status === 400) {
                    dispatch({ type: contactConstants.CONTACT_FAILURE,
                        payload: { message: error.response.data.message || error.response.data.error }
                    })
                }
            }
        })
    }
}