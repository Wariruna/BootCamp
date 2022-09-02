import React from 'react'
import ReactDOM from 'react-dom'
//Function type to one line(Return the first component)
const Header = ({ course }) => {

  return (<h1>{course}</h1>)
}

//función one liner (Cuando una función solo devueve lo primero que está evaluando se puede omitir el return y las llaves).
const Part1 = (props) => <p>{props.parts1} {props.exe}</p>
//One liner function
const Part2 = (props) => <p>{props.parts2} {props.exe2}</p>
//ordinary component
const Part3 = (props) => {
  return (
    <p>{props.parts3} {props.exe3}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part1 parts1={props.parts1} exe={props.exe1}></Part1>
      <Part2 parts2={props.parts2} exe2={props.exe2}></Part2>
      <Part3 parts3={props.parts3} exe3={props.exe3}></Part3>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exe1 + props.exe2 + props.exe3} </p>
  )
}


const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course}></Header>
      <Content parts1={part1} exe1={exercises1} parts2={part2} exe2={exercises2} parts3={part3} exe3={exercises3}></Content>
      <Total exe1={exercises1} exe2={exercises2} exe3={exercises3}></Total>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
