import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.content.parts[0]} />
      <Part part = {props.content.parts[1]} />
      <Part part = {props.content.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
        <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {
      props.content.parts[0].exercises + 
      props.content.parts[1].exercises + 
      props.content.parts[2].exercises
      }</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header course = {course} />
      <Content content = {course} />
      <Total content = {course}  />
            
    </>
  )
}

export default App