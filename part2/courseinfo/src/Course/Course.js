import React from 'react'
import Part from './Content/Part'
import Header from './Header';
import Total from './Content/Total'

const Course = ({ course }) => {

    return (
        
      <div>
        
          <Header name={course.name}/>

           {course.parts.map(part =>  
            <Part 
                  key={part.id} 
                  name={part.name} 
                  exercises={part.exercises} /> 
           )}
           
           <Total parts={course.parts}/>
          
      </div>
    )
  }

export default Course