import React from 'react'

const Person = ({name,number,deletePerson}) => {


  return (
    <>
      <li>{name}: {number}</li>
      <button type="button" onClick={deletePerson}>delete</button>
      </>
  )
}

export default Person