import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './App.css'
import './Media.css'
import { useState } from "react";

import Additem from "./Additem";
import SearchItem from "./SearchItem";



const App =()=>{

  
    const [items,setitems] = useState(

      // static data  [{ id:1,       checked:true,        item:"Create  software"      },   {   id:2,     checked:false,   item:"playing chess"   },   {   id:3,   checked:true,   item:"coding"   } ]

      JSON.parse(localStorage.getItem("todo_list"))


    )
  
  const handleChange = (id)=>{
  
    const listitem  = items.map( (item)=>(item.id===id?{...item,checked:!item.checked}:item) )
  
    setitems(listitem)
  
    localStorage.setItem("todo_list",JSON.stringify(listitem))
  
  
  
  }
  
  const handleDelete=(id)=>{
    const listitem = items.filter((item)=>item.id!==id)
  
    setitems(listitem)
  
    localStorage.setItem("todo_list",JSON.stringify(listitem))
  
  }


  const [newItem,setnewItem] = useState('')



  
const addItem =(item,)=>{

  const id = items.length?items[items.length-1].id+1:1

  const  addnewItem  = {id:id,checked:false,item:item}

  const listItems = [...items,addnewItem]

  setitems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))


}




const handlesubmit =(e)=>{
  e.preventDefault()

    if(!newItem) return;  // no value is there just return .
// console.log(newItem)
    // add function write it 
    addItem(newItem)
    setnewItem('')
  
}

const [search,setsearch] = useState('')

  return(
    <div className='flex  App'>
    <Header title='Todo - List' />
    <Additem
    
    newItem = {newItem}
    setnewItem ={setnewItem}
    handlesubmit = {handlesubmit}
    />
    <SearchItem 
    search = {search}
    setsearch = {setsearch}
    
    
    />
    <Content 
    
    items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
    handleChange = {handleChange}
    handleDelete = {handleDelete}

    />
    <Footer

    length = {items.length}
    
     />
    
    </div>


    
  )
}

export default App;