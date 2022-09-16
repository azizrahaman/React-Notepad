import React from 'react';
import {AiOutlinePlus} from "react-icons/ai";

export default function Sidebar({addNote, deleteNote, notes, activeNote, setActiveNote}) {

    const sortedNote = notes.sort((a,b) => b.lastModified - a.lastModified);

    return (
    <div className='sidebar-container'>
        <div className='sidebar-title'>
            <h3>Notepad</h3>
            <button onClick={addNote}><AiOutlinePlus /></button>
        </div>
    
        {sortedNote.map((note) => (
            <div className={`sidebar-notes ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)}>
                <div className='sidebar-note-title'>
                    <strong>{note.title}</strong>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
                <p>{note.body}</p>
                <small>Last Modified : {new Date(note.lastModified).toLocaleDateString("en-Us", {
                    hour: "2-digit",
                    minute: "2-digit"
                })}</small>
            </div>
        ))}
    </div>
    )
}
