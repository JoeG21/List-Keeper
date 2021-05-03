import { useState, useEffect } from 'react'
import NoteCards from '../components/NoteCards';

const NoteContainer = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/notes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
            .then(res => res.json())
            .then(notes => setNotes(notes))
            // .then(note => console.log(note))
    }, [])

    return (
        <div>
            {/* {notes.map(note=> <NoteCards key={note.id} note={note} />)} */}
            {<NoteCards notes={notes} />}
        </div>
    )
}

export default NoteContainer