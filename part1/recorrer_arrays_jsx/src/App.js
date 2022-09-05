import './App.css';
import {useState} from 'react'
import {Note} from './Notes'
const pokeball="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(false);

  const handleChange = (event) => {
    setNewNote(event.target.value);
    console.log(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault(); //Esto evita las acciones por defecto de los eventos. en este caso que se refresque la pagina al enviar un formulario.
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    setNotes(notes.concat(noteToAddToState));
    setNewNote('');
  }
  const hadleShowAll = () => {
    setShowAll(!showAll);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />
      </header>
      <button onClick={hadleShowAll}>{showAll ? 'Show All': 'Only Importants'}</button>
    <ul>
      {notes
      .filter((note) => { //El filtro debe devolver un booleano
        if (showAll === false) {
          return true;
        }else{
          return note.important === true;
        }
      })
      .map((note) => (
      <Note key={note.id} id={note.id}  content={note.content} date={note.date} categories={note.categories}></Note>
      ))}
      </ul>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newNote}></input>
      <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

