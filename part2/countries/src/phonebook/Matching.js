import React from 'react'
import Countrie from './Countrie'
import DetailedCountrie from './DetailedCountrie'

const Matching = ({list}) => {


 let comment = ""
    
    if (list.length > 10) {
      comment = "too many matches, keep specifying"
      console.log(list);
    } else {
      if (list.length === 1) {
        comment = list.map((countrie) =>
       
      
        <DetailedCountrie
        key={countrie.name}  
        name={countrie.name} 
        capital= {countrie.capital} 
        population={countrie.population} 
        languages={countrie.languages} 
        flag={countrie.flag} /> 
          )
        
      } else {
        comment = list.map((countrie) =>
       
      <>
      <Countrie  key={countrie.name}  name={countrie.name} capital= {countrie.capital} 
        population={countrie.population} 
        languages={countrie.languages} 
        flag={countrie.flag} /> 
        
       
      </>
        )
      }
      
    }

  return (
      <div>
        <ul>
        
        {comment} 

      </ul>
         
      </div>
  )
}

export default Matching