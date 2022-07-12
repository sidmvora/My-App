import axiosInstance from "../../config/axios.config"
import actions from "./actions"

const baseUrl = 'notes/'

export const specificUpdateNote = note => {
    return {
        type: actions.SPECIFIC_UPDATE_NOTE,
        paylod: note
    }
}

export const setNotes = note => {
    return {
        type: actions.FETCH_ALL_NOTES_SUCCESS,
        paylod: note
    }
}

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: actions.FETCH_ALL_NOTES_ACTION })
        axiosInstance.get(`${baseUrl}fetchallnotes`)
            .then(res => dispatch(setNotes(res.data)))
            .catch(err => {
                console.error(err)
                dispatch({ type: actions.FETCH_ALL_NOTES_FAIL, paylod: err.response.data })
            })
    }
}

export const addNote = (title, description, tag) => {
    return dispatch => {
        axiosInstance.post(`${baseUrl}addnote`, { title, description, tag })
            .then(() => dispatch(getNotes()))
    }
}

export const updateNotes = (id, title, description, tag) => {
    return dispatch => {
        axiosInstance.put(`${baseUrl}updatenote/${id}`, { title, description, tag })
            .then(res => dispatch(specificUpdateNote(res.data)))
    }
}

export const deleteNotes = id => {
    return dispatch => {
        dispatch({ type: actions.DELETE_NOTE_ACTION })
        axiosInstance.delete(`${baseUrl}deletenote/${id}`)
            .then(() => dispatch({ type: actions.DELETE_NOTE_SUCCESS, paylod: id }))
            .catch(() => dispatch({ type: actions.DELETE_NOTE_FAIL }))
    }
}