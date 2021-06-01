import React, { useState } from 'react'

const Button = ({onClick,  bText}) => (
<button onClick = {onClick}>
  {bText}
</button>
)

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [points, setPoints] = useState([0,0,0,0,0,0]) 
  
  const [selected, setSelected] = useState(0)
  
  var indexOfMaxValue = points.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

  const ranClick = () => {
    
   setSelected( getRandomInt(anecdotes.length))
   
  }

  const voteClick = () => {
    
    points[selected] +=1 
    const copy = [...points]
    setPoints(copy)

  }
  
  function getRandomInt( max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max ));
}

  return (
    <>
    <div>
      <h1>Anecdote of the day</h1>
    </div>

    <div>
      {anecdotes[selected]}
    </div>

    <div>
      has <b>{points[selected]}</b> votes
    </div>
    
    <Button onClick={voteClick} bText="vote" />

    <Button onClick={ranClick} bText="next anecdote" />

    <div>
     <h1>Anecdote with most votes</h1>
    </div>

    <div>
      {anecdotes[indexOfMaxValue]}
    </div>

    <div>
      has <b>{points[indexOfMaxValue]}</b>  votes
    </div>
    
    </>
  )
}

export default App