import './Content.css';
import Note from './Note';

export default function Content({ notes, handleDelete }) {
  return (
    <main className="content">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          handleDelete={handleDelete}
        />
      ))}
    </main>
  );
}
