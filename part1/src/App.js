
import './App.css';
import Header from './Header';

const Message = () => {
  return (
      <h2>Hola Mundo desde un nuevo componente</h2>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <div>Hola Hola</div>
    </div>
  );
}

export default App;
