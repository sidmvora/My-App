import actions from "../action-creator/actions";

const loading = {
    isFetching: false,
    deleteingNote: false
}

const noteReducer = (state = { notes: [], loading, error: null, activeNoteId: null }, action) => {
    switch (action.type) {
        case actions.FETCH_ALL_NOTES_ACTION:
            return { ...state, notes: [], loading: { ...state.loading, isFetching: true }, error: null }
            break;

        case actions.FETCH_ALL_NOTES_SUCCESS:
            return { ...state, notes: action.paylod, loading: { ...state.loading, isFetching: false } }
            break;

        case actions.FETCH_ALL_NOTES_FAIL:
            return { ...state, loading: { ...state.loading, isFetching: false }, error: action.paylod }

        case actions.SPECIFIC_UPDATE_NOTE:
            const updateNote = action.paylod;
            let newNotes = [...state.notes];
            newNotes = newNotes.map(note => {
                if (note._id === updateNote._id) {
                    return updateNote;
                }
                return note;
            })
            return { ...state, notes: newNotes }
            break;

        case actions.DELETE_NOTE_ACTION:
            return { ...state, loading: { ...state.loading, deleteingNote: true }, error: null }
            break;

        case actions.DELETE_NOTE_SUCCESS: {
            // takeNote from state
            //removeDeleting Note from note list
            // setNew Notes to note state\
            const deleteNoteId = action.paylod
            let newNotes = [...state.notes]
            console.log(newNotes, deleteNoteId)
            newNotes = newNotes.filter(note => {
                return note._id !== deleteNoteId
            })
            return { ...state, notes: newNotes, loading: { ...state.loading, deleteingNote: false } }
            break;

        }

        case actions.DELETE_NOTE_FAIL:
            return { ...state, loading: { ...state.loading, deleteingNote: false }, error: action.paylod }

        default:
            return state
            break;
    }
}
export default noteReducer