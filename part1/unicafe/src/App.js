import React, { useState } from 'react'

const Tittle = ({titleText}) => (
  <h1>
    {titleText}
  </h1>
  
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
  
)

const Statistics = ({onStats,text}) => {
  if(text ==="positive"){
    return(
     <table>
      <tbody>
        <tr>
  
          <td>{text}: {onStats} %</td>
  
        </tr>
      </tbody>
    </table> 
    )
    
  }else {
    return(
      <table>
        <tbody>
          <tr>
    
          <td>{text}: {onStats} </td>
    
          </tr>
        </tbody>
      </table>
    )
      }
  }

  const DisplayFeed = ({feedBack}) => {
    if(feedBack.allStats === 0){
      return (
        <div>
          No FeedBack Given
        </div>
      )
    } else{
      return(
        <>
        
        <Statistics onStats={feedBack.good} text="good"  />
        <Statistics onStats={feedBack.neutral} text="neutral" />
        <Statistics onStats={feedBack.bad} text="bad" />
        <Statistics onStats={feedBack.allStats} text="all" />
        <Statistics onStats={feedBack.avgStats/feedBack.allStats} text="average" />
        <Statistics onStats={(feedBack.good*100)/feedBack.allStats} text="positive"/>
    
        </>
      )
    }
    
  }

const App = () => {
 
  const [feedBack, setFeedBack] = useState({
    good: 0, 
    neutral: 0, 
    bad: 0,
    allStats: 0,
    avgStats: 0
  })
  const goodClick = () => {
    setFeedBack( {...feedBack, 
      good: feedBack.good +1, 
      allStats: feedBack.allStats+1, 
      avgStats: feedBack.avgStats+1})
  }
  const neutralClick = () => {
    setFeedBack({...feedBack, 
      neutral: feedBack.neutral +1, 
      allStats: feedBack.allStats+1})
  }
  const badClick = () => {
    setFeedBack({...feedBack, 
      bad: feedBack.bad +1, 
      allStats: feedBack.allStats +1, 
      avgStats: feedBack.avgStats-1})
  }

  const feed = "give feedback"
  const statistics = "statistics"

  return (
    <>

    <Tittle titleText = {feed} />
    <Button onClick={goodClick} text="good" />
    <Button onClick={neutralClick} text="neutral" />
    <Button onClick={badClick} text="bad" />
    <Tittle titleText = {statistics} />
    <DisplayFeed feedBack = {feedBack} />

    </>
  )
}

export default App