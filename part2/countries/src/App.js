import React, { useState, useEffect  } from 'react'
import Filter from './phonebook/Filter'
import axios from 'axios'
import Matching from './phonebook/Matching'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [filterList, setFilterList] = useState([])


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        setFilterList(response.data)
      })
  }, [])
  
  return (
    <>
     

      <Filter filterList={filterList} setFilterList={setFilterList} countries={countries} />
      
      
  
    
      
      <h2>Countries</h2>
      <Matching list={filterList} />
   
      
      
    </>
  )
}

export default App