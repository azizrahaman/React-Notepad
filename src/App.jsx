import React, { useEffect, useState } from "react";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import uuid from "react-uuid";
import "./style.css";

export default function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.localNote) || []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(()=> {
    localStorage.setItem("localNote", JSON.stringify(notes));
  },[notes]);


  function addNote() {
    const newNote = {
      id: uuid(),
      title: "Title",
      body: "Sample Text",
      lastModified: Date.now(),
    };

    setNotes((prev) => [...prev, newNote]);
  }
  function deleteNote(idToDelete) {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  }

  function getActiveNote() {
    return notes.find(note => note.id === activeNote);
    
  }

  function updateNote(newNote) {
    const updatedNotes = notes.map((note) => {
        if (note.id === activeNote) {
            return newNote
        }
        return note;
    })
    setNotes(updatedNotes);
  }

  return (
    <div className="app-container">
      <Sidebar
        notes={notes}
        addNote={addNote}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote={activeNote}
        getActiveNote={getActiveNote()}
        updateNoteArray={updateNote}
        setActiveNote={setActiveNote}
      />
    </div>
  );
}
