import React from 'react'
import './loader.css'

const Loader = ({mensaje}) => {
  return (
    <div className='loader-overlay'>
      <span className="loader"></span>
      <p style={{color:'#7A170C',fontSize:'18px', fontWeight:'bold'}}>{mensaje}</p>
    </div>    
  )
}
export default Loader