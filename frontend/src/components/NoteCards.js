import React from 'react'
import Cards from './Cards'

const NoteCards = (props) => {
    return (
        <>
            {props.notes.map(note => <Cards key={note.id} note={note} />)}
        </>
    )
}

export default NoteCards