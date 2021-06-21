import React, { useState, useEffect  } from 'react'
import Filter from './phonebook/Filter'
import Person from './phonebook/Person'
import PersonForm from './phonebook/PersonForm'
import personsService from './services/persons'
import Notification from './Notification'
import './App.css'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [filterList, setFilterList] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [NotiMessage, setNotiMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  
  useEffect(() => {
    
      personsService
      .getInfo()
      .then(baseList => {
        setPersons(baseList)
        setFilterList(baseList)
      })
  }, [])

  const deletePerson = id => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Do you really want to delete ${person.name} from the phonebook`)) {
     
      personsService
        .deletePerson(id)
        setPersons(persons.filter(p => p.id !== id))
        setFilterList(persons.filter(p => p.id !== id))
      }
    }
  


  
  return (
    <>
    <Notification message={NotiMessage} errorMessage={errorMessage} />
      <h2>Phonebook</h2>

      <Filter filterList={filterList} setFilterList={setFilterList} persons={persons} />

    <h2>Add new person</h2>
    <PersonForm 
      persons={persons}
      newName={newName} 
      newNumber={newNumber}
      setPersons={setPersons}
      setFilterList={setFilterList}
      setNewName={setNewName}
      setNewNumber={setNewNumber}
      setNotiMessage={setNotiMessage}
      setErrorMessage={setErrorMessage}
      />
      
      <h2>Phone List</h2>
      <ul>
        {filterList.map((person) =>
      
          <Person 
          key={person.name}  
          name={person.name} 
          number={person.number} 
          deletePerson={() => deletePerson(person.id)}  />
            )}

      </ul>
    </>
  )
}

export default App