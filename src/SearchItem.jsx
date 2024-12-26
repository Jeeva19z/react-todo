import React from 'react'

const SearchItem = ({search,setsearch}) => {
  return (
<form className='searchcomp' onSubmit={(e)=>(e.preventDefault())}>

    <label htmlFor="search">Search</label>

    <input type="text"
    className='searchItem'
    id='search'
    placeholder='Search'
    value={search}
    onChange={(e)=>setsearch(e.target.value)} 


    
    
    
    
    />

</form>  )
}

export default SearchItem