import { useState } from 'react';

// Components
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  const [database, setDatabase] = useState(fetchNotes);

  function fetchNotes() {
    if (!localStorage.notes) localStorage.notes = JSON.stringify([]);
    return JSON.parse(localStorage.notes);
  }

  function handleCreate(note) {
    setDatabase((prev) => {
      localStorage.notes = JSON.stringify([...prev, note]);
      return fetchNotes();
    });
  }

  function handleDelete(id) {
    setDatabase((prev) => {
      const output = prev.filter((note) => note.id !== id);
      localStorage.notes = JSON.stringify(output);
      return fetchNotes();
    });
  }

  return (
    <>
      <Header />
      <CreateNote handleCreate={handleCreate} />
      <Content notes={database} handleDelete={handleDelete} />
      <Footer />
    </>
  );
}
