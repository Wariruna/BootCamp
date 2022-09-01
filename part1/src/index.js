import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => { 
  return <h1>{props.course}</h1>
}

const Paragraph = (props) => {
  return (
    <p>{props.parts} {props.parts2}</p>
  )
}

const TotalExercises = (props) => {
  return(
    <p>Total de Ejercicios {props.exe1 + props.exe2 + props.exe3} </p>
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
      <Title course={course} part={part1}></Title>
      <Paragraph parts={part1} parts2={exercises1}></Paragraph>
     <Paragraph parts={part2} parts2={exercises2}></Paragraph>
     <Paragraph parts={part3} parts2={exercises3}></Paragraph>
      <TotalExercises exe1={exercises1} exe2={exercises2} exe3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
