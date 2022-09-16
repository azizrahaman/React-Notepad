import React from "react";
import ReactMarkDown from "react-markdown";

export default function Main({ getActiveNote, updateNoteArray, updateNote, setActiveNote }) {
  function updateNote(name, value) {
    const note = {...getActiveNote,[name]:value, lastModified: Date.now()};
    updateNoteArray(note);

    // updateNoteArray({
    //   ...getActiveNote,
    //   [name]: value,
    //   lastModified: Date.now()
    // })
  }

  if(!getActiveNote) {
    return <div className="no-active-note">No Active Note</div>
  }

  return (
    <div className="main-container">
      <div className="main-input-section">
        <input 
          className="main-input-title" 
          value={getActiveNote.title} 
          onChange={(e) => updateNote(e.target.name, e.target.value)} 
          type="text"
          name="title" 
          autoFocus />
        <textarea 
          className="main-input-body" 
          value={getActiveNote.body}
          name="body"
          onChange={(e) => updateNote(e.target.name, e.target.value)} />
      </div>
      <div className="main-preview-section">
        <strong>{getActiveNote.title}</strong>
        <ReactMarkDown>{getActiveNote.body}</ReactMarkDown>
      </div>
    </div>
  );
}
