import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes, updateNotes } from '../state/action-creator/manageNotes'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Note = () => {

    const [note, setNote] = useState({ title: '', description: '', tag: '' })
    const dispatch = useDispatch()
    const ref = useRef(null)
    const refClose = useRef(null)
    const notes = useSelector(state => state.note.notes)
    // const note={ notes: [], loading, error: null, activeNoteId: null }
    const isFetching = useSelector(state => state.note.loading.isFetching)
    const error = useSelector(state => state.note.error)
    console.log(notes)
    useEffect(() => {
        dispatch(getNotes())
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ ...currentNote })
    }

    const handelClick = () => {
        dispatch(updateNotes(note))
        refClose.current.click()
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    if (isFetching) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" name='title' value={note.title} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} minLength={5} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.title.length < 5 || note.description.length < 5} type="button" className="btn btn-primary" onClick={handelClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2>Yours Note</h2>
                <div className='container'>
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Note