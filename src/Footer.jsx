import React from 'react'

 const Footer =({length})=>{

    // const year = new Date()
    return(

        <div className='footer-cotent'>
          {length} List {(length ===1 ?"item":"items")} 
        </div>
    )
}

export default Footer;