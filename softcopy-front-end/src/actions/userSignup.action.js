import axios from "../helpers/axios"
import { signupConstants } from "./constants"

export const signup = (user) => {
    return async dispatch => {
        dispatch({ type: signupConstants.SIGNUP_REQUEST })
        const res = await axios.post(`/signup`, { ...user })

        if(res.status === 201) {
            dispatch({ type: signupConstants.SIGNUP_SUCCESS,
                payload: { message: res.data.message }
            })
        } else {
            if(res.status === 400) {
                dispatch({ type: signupConstants.SIGNUP_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
    }
}