import React from 'react'
import { FaPlus } from "react-icons/fa";


const Additem = ({newItem,setnewItem,handlesubmit}) => {
  return (
 <form className='addForm' onSubmit={handlesubmit}>  
 
 {/* or- bith are sane for onsubmit we can write no need to mention braket and e */}
 {/* onSubmit={(e)=>handlesubmit(e)}> */} 

    <label htmlFor="addItem">Add Item</label>
    <input 
    type="text" 
    id="addItem"
    autoFocus
    placeholder='Add Item'

    value={newItem}

    onChange={(e)=>setnewItem(e.target.value)}
    />

    <button
    
    type='submit'
    aria-label='Add-Item'
    className='submitbtn'
    
    >
    <FaPlus />
    </button>

 </form>
  )
}

export default Additem