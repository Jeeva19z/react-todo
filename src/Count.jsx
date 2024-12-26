import React from "react";
import { useState } from "react";


const Count = ()=>{
   
  const [score,setscore] = useState(99);


  

  const reducescore = ()=>{
    
    setscore((score)=>{return score-1})
    setscore((score)=>{return score-1})
  
  }
   
  const incresescore = ()=>{
    setscore(score+1)
  }
    return (
  <div >
        
  
  <p>Score</p>
      <button className='space' onClick={()=>reducescore()}>-</button>
      <button  className='space'>{score}</button>
      <button  className='space' onClick={()=>{incresescore()}}>+</button>
        
       
      </div>
      
  )
  }

export default Count;
