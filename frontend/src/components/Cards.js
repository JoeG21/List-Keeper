import React from 'react'

const Cards = (props) => {
    return (
        <div>
            <h1> {props.note.title} </h1>

            <h3> {props.note.body} </h3>
        </div>
    )
}

export default Cards
