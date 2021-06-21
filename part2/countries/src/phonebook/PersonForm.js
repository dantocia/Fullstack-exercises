import React from 'react'

const PersonForm = ({persons,newName, newNumber,setNewNumber,setNewName, setFilterList, setPersons}) => {
  const addPerson = (event) => {
    event.preventDefault()
    if(newName === ''){
      window.alert(`Error: Name field is empty`);
    }else{ 
      if(newNumber === ''){ window.alert(`Error: Number field is empty`);
    }else{
      if(persons.find(person => person.name === newName)){
        window.alert(`${newName} is already added to phonebook`);
        setNewName('')
        setNewNumber('')
        
      } else{
        const newPerson = {
          name: newName,
          number: newNumber      
        }
        setPersons(persons.concat(newPerson))
        setFilterList(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
  
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