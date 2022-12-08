import './Note.css';

export default function Note({ id, title, content, handleDelete }) {
  return (
    <div className="note">
      <h2 className="note__title">{title}</h2>
      <p className="note__content">{content}</p>
      <button className="note__btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}
