import React from 'react'
import personsService from '../services/persons'


const PersonForm = ({persons,newName, newNumber,NotiMessage,setNewNumber,setNewName, setFilterList, setPersons, setNotiMessage,setErrorMessage}) => {
  const addPerson = (event) => {
    event.preventDefault()
    if(newName === ''){
      window.alert(`Error: Name field is empty`);
    }else{ 
      if(newNumber === ''){ window.alert(`Error: Number field is empty`);
    }else{
      if(persons.find(person => person.name === newName)){

        if (window.confirm(`${newName} is already added to phonebook, do you want to update the phonenumber?`)) {
        const findPerson = persons.find(id => id.name === newName)
        const newPerson = {
          name: newName,
          number: newNumber
        }
        const id = findPerson.id
        
        personsService.updatePhone(id, newPerson).then(updatedPerson => {
          setPersons(persons.map((person => person.id !==id ? person : updatedPerson)))
          setFilterList(persons.map((person => person.id !==id ? person : updatedPerson)))
          setNotiMessage(`${newName} was updated`)
          setTimeout(() => {
            setNotiMessage(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error);
          setErrorMessage(`information of ${newName} was already deleted, Processing...`)
          setTimeout(() => {
            setErrorMessage(null)
            setPersons(persons.filter(n => n.id !== id))
            setFilterList(persons.filter(n => n.id !== id))
          }, 10000)

        })
       
        setNewName('')
        setNewNumber('')
        }
        
        
      } else{
        const newPerson = {
          name: newName,
          number: newNumber      
        }
        personsService
        .createPerson(newPerson)
        .then(postedPerson =>{
          setPersons(persons.concat(postedPerson))
          setFilterList(persons.concat(postedPerson))
          setNotiMessage(`${newName} was added`)
          setTimeout(() => {
            setNotiMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
        
        
  
      }

    }
      

    }

  }
  
  const handleNameChange = (event) => {

    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

    
  return (
    <div>
         <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
  )
}

export default PersonForm