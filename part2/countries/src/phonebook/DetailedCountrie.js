import React from 'react'

const DetailedCountrie = ({name,capital,population,languages, flag }) => {

  return (
    <>
    
      <h2>{name}</h2>
      <p><strong>Capital: </strong>{capital}</p>
      <p><strong>Population: </strong>{population}</p>
      <h2>Languages:</h2>
      <ul>          
          {languages.map(lan => {
            return(
              <li key={lan.name}> {lan.name}</li>
            )})
          }
        
      </ul>
     
     <img alt="flag" src={flag} width="200" height="250"></img>
     
      
      
    </>
  )
}

 

export default DetailedCountrie




    
  