
import './App.css';
import Header from './Header';

function App() {
  const Message = ()=> {
    return (
      <h2>Hola Mundo desde un nuevo componente</h2>
    )
  }
  return (
    <div className="App">
      <Header />
      <Message />
    </div>
  );
}

export default App;
