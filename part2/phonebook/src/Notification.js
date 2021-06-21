import React from 'react'

const Notification = ({ message,errorMessage }) => {
    if (message === null && errorMessage === null) {
      return null
    }
 
  
    return (
        <>
        {message ? <div className="success">
       {message}
     </div> : null }
  
      {errorMessage ? <div className="error">
       {errorMessage}
     </div> : null }
       
     </>
    )
  }
  
  export default Notification