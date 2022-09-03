//import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//Component ONE LINER H1
const Counter = ({ number }) => <h1>{number}</h1>

const Button = (props) => <button onClick={props.onClick}>{props.value}</button>

const INIT_STATE2= {
  status: true,
  btnAction:'+1',
}
const btnChange= 'Change';


const App = () => {
  /*
    const contador = useState(0);
  
    const contadorValue = contador[0];  Aquí declaramos el estado sin desestructurar
    const setState = contador[1];
  */
  //Desesctructuración del estado anterior.useState() nos devueve un array de 2 posiciones.Por lo que:
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(INIT_STATE2);


  //Increment and Decrement by one button
  //Button action to change function increment/decrement
  const change = ()=>{  
    setState2({
      status: !state2.status,
      btnAction : state2.status ? '-1': '+1',    
    }
  )}
  //Button to add or less 1 to counter.
  const action = () => {
    state2.status ? setState(state + 1) : setState(state -1);
  }
  //Reset counter to default params.
  const reset = () => {
    return (
     setState(0),
     setState2(INIT_STATE2)
     )}

  //Check isEven or 
  const isEven = state % 2 === 0;

  return (
    <div>
      <Counter number={state}></Counter>
      <p>{isEven ? 'PAR' : 'IMPAR'}</p>
      <Button onClick={change} value={btnChange}></Button>
      <Button onClick={action} value={state2.btnAction}></Button>
      <Button onClick={reset} value="Reset"></Button>

      
     
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
