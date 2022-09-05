import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from'./App';

const arrays = [
  {
    id: 1,
    content: "Browser can execute only JavaScript",
    date: "2019-10-26",
    important: true,
    categories: ['sport', 'hobby' ] 
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-09-07",
    important: false
  },
  {
    id: 3,
    content: "Browser can execute only JavaScript",
    date: "2022-06-27",
    important: false
  }
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App notes={arrays} />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
