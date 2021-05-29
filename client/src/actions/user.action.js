import axios from '../helpers/axios'
import { userConstants } from './constants'

export const getAllBlogs = () => {
    return dispatch => {
        dispatch({ type: userConstants.FOLLOW_USER_REQUEST })
        const res = axios.get('/blogs');

        res.then(response => {
            if(response.status === 200) {
                dispatch({ type: userConstants.FOLLOW_USER_SUCCESS,
                    payload: { message: response.data.message }
                })
            }
        })

        res.catch(error => {
                dispatch({ type: userConstants.FOLLOW_USER_FAILURE,
                    payload: { error: error.response.data.error }
                })
        })
    }
}