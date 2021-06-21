import React from 'react'

const Filter = ({filterList,countries,setFilterList}) => {
    
    const handleFilterChange = (event) =>{
        
        if(event.target.value === ''){
          setFilterList(countries)
        } else {
          const list = filterList.filter(filteredList => 
            filteredList.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) 
            setFilterList(list)
            
        
        }
      }
    
  return (
    <div>
          find countries with: <input value={filterList.name} onChange={handleFilterChange} />
      </div>
  )
}

export default Filter