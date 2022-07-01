import axiosInstance from '../../config/axios.config'
import actions from './actions'

export const setAuthUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: actions.SET_AUTH_USER,
            paylod: user
        })
    }
}

export const signIn = (credentials) => {
    return (dispatch) => {
        axiosInstance.post(`auth/login`, credentials)
            .then(res => {
                localStorage.setItem('authtoken', res.data.authtoken)
                dispatch(getUser())
            })
    }
}

export const getUser = () => {
    return (dispatch) => {
        axiosInstance.post(`auth/getuser`)
            .then(res => {
                dispatch(setAuthUser(res.data))
            })
    }
}