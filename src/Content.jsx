import React from "react";


import ListItem from "./ListItem";


const Content = ({items,handleChange,handleDelete})=>{

  return(
 
    <div className='main-content'>  
   {/* is any items present show the true of value nor show the P tag contetn. */}

      
{items.length? <ListItem 
   items={items}
   handleChange = {handleChange}
   handleDelete = {handleDelete}
  / >   
  

:(


    <p className="emptylist">Your List is Empty</p>
   )}
    </div>
  
 



)
}

export default Content;