import React from 'react'
import ReactDOM from 'react-dom'
//Function type to one line(Return the first component)
const Header = ({course}) => <h1>{course}</h1>

const Content = (props) => {
  return (
    <p>{props.parts} {props.parts2}</p>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.exe1 + props.exe2 + props.exe3} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} part={part1}></Header>
      <Content parts={part1} parts2={exercises1}></Content>
     <Content parts={part2} parts2={exercises2}></Content>
     <Content parts={part3} parts2={exercises3}></Content>
      <Total exe1={exercises1} exe2={exercises2} exe3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
