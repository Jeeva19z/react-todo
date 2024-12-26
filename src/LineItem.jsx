import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,handleChange,handleDelete}) => {
  return (
  

<li className="contet-list" >
  
  <div className="two-wrapper">


    <input className="list-checkbox"
      type="checkbox"
      checked={item.checked}
      onChange={()=>{handleChange(item.id)}}
         
    />

      <label style={(item.checked)?{textDecoration:"line-through",color:"red"}:null} 
        onDoubleClick={()=>{handleChange(item.id)}}
      className="list-item"> {item.item} </label>


      </div>

      <FaTrashAlt 
      className="btnclslist"
      role="button"
      tabIndex="0"
      aria-label={`Delete  ${item.item}`}  // screen technologie read
      onClick={()=>handleDelete(item.id)}
      />

</li>
   
  )
}

export default LineItem