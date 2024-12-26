import React, { useState } from 'react'




const Content = () => {

  const [names,setnames] = useState("earn")

  const handleclick = ()=>{

    const mandra_arr = ["Earn","Grow","Give"];
    const randomGenNumber = Math.floor(Math.random()*3);
    const arr=  mandra_arr[randomGenNumber];

return setnames(arr)

  }


  
return(
  <div className='main-content'>

    <p>let's {names} money</p>
    <button onClick={()=>handleclick()}>Do it</button>
  
  </div>
)
}


export default Content











// -----------------------------
// function doing(){
//   let Rightnow = ['coding',"studying","gym","planing for grow money"];
//   const radomnumber = Math.floor(Math.random()*4)

//   return Rightnow[radomnumber]
//   }


// ----
// <p>I m doing   {doing()}</p>
