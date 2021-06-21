import React from 'react'

const Total = ({ parts }) => {
    const partsExercises = parts.map(jExe => jExe.exercises)
    

    let sum = partsExercises.reduce((acc, cValue) => {
        return acc + cValue
    })
    return(
      <p><b>Total of {sum} exercises </b></p>
    ) 
  }
export default Total