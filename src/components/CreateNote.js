import './CreateNote.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function CreateNote({ handleCreate }) {
  const [note, setNote] = useState(resetNote);

  function resetNote() {
    return {
      id: uuid(),
      title: '',
      content: ''
    };
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleCreate(note);
    setNote(resetNote);
  }

  return (
    <form className="create-note" onSubmit={handleSubmit}>
      <input
        className="create-note__input"
        placeholder="Title"
        type="text"
        name="title"
        onChange={handleChange}
        value={note.title}
      />
      <textarea
        className="create-note__textarea"
        placeholder="Take a note..."
        rows="4"
        name="content"
        onChange={handleChange}
        value={note.content}
        required
      />
      <button className="create-note__btn">+</button>
    </form>
  );
}
