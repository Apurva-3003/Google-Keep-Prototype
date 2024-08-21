import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArr, setNote] = useState([]);

  function addNote(newNote) {
    setNote((prevValues) => {
      return [...prevValues, newNote];
    });
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteArr.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.noteTitle}
            content={note.noteContent}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
