import React, { useState } from "react";

function CreateArea(props) {
  const [noteData, setNoteData] = useState({ noteTitle: "", noteContent: "" });

  function handleInput(e) {
    const { name, value } = e.target;
    if (name === "title") {
      return setNoteData({
        noteTitle: value,
        noteContent: noteData.noteContent,
      });
    } else if (name === "content") {
      return setNoteData({
        noteTitle: noteData.noteTitle,
        noteContent: value,
      });
    }
  }

  function handleClick(event) {
    //Calling addNote function with the user entered data as parameter
    props.addNote(noteData);
    setNoteData({
      noteTitle: "",
      noteContent: "",
    });
    //This line prevents the webpage from being refreshed (default behaviour of forms)
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleInput}
          value={noteData.noteTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleInput}
          value={noteData.noteContent}
        />
        <button onClick={handleClick}> Add </button>
      </form>
    </div>
  );
}

export default CreateArea;
