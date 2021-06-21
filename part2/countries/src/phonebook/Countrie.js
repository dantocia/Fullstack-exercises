import {React,useState} from 'react'
import DetailedCountrie from './DetailedCountrie'


const Countrie = ({name,capital,population,languages, flag}) => {
 
  const [showDetails, setShowDetails] = useState(false)
  const onClick = () => setShowDetails(!showDetails)
     
  return (
    <>
    <li>{name}</li> <button type="button" onClick={onClick}>show</button>
    {showDetails ? <DetailedCountrie 
    name = {name} 
    capital={capital} 
    population ={population} 
    languages={languages} 
    flag = {flag} />: null}
    </>
      )
}


export default Countrie