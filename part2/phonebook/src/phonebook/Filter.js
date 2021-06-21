import React from 'react'

const Filter = ({filterList,persons,setFilterList}) => {
    
    const handleFilterChange = (event) =>{
        
        if(event.target.value === ''){
          setFilterList(persons)
        } else {
          setFilterList(filterList.filter(filteredList => 
            filteredList.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) )
        }
      }
    
  return (
    <div>
          filter shown with: <input value={filterList.name} onChange={handleFilterChange} />
      </div>
  )
}

export default Filter