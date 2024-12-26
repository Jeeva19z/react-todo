import React from 'react'
import LineItem from './LineItem'
const ListItem = ({items,handleChange,handleDelete}) => {
  return (
    <div>   
        <ul className="ul-li-listcotent">
        {items.map((item)=>(   
          <LineItem 

          item = {item}
          key = {item.id}
      
          handleChange = {handleChange}
          handleDelete = {handleDelete}
          />
  
  
            ))
          }
        
        </ul>
     </div>
  )
}

export default ListItem