import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../state/action-creator/manageNotes'

const AddNote = () => {

    const [note, setNote] = useState({ title: '', description: '', tag: '' })
    const dispatch = useDispatch()
    const handelClick = (e) => {
        e.preventDefault()
        dispatch(addNote(note.title, note.description, note.tag))
    }

    const onChange = e => setNote({ ...note, [e.target.name]: e.target.value })
    
    return (
        <div className='container mt-3'>
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
                <button type="submit" className="btn btn-primary" disabled={note.title.length < 5 || note.description.length < 5} onClick={handelClick}>Submit</button>
            </form>
        </div>
    )
}

export default AddNote