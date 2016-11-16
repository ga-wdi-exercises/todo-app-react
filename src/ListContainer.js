import React, { Component } from 'react'
import NoteData from './NoteData.json'
import NoteContainer from './NoteContainer.js'

class ListContainer extends Component {

  render() {
    let notes = NoteData.map((note,i) => {
      return <NoteContainer
        key={i}
        note={note} />
    })

    return (
      <div>
        {notes}
      </div>
    )
  }
}

export default ListContainer
