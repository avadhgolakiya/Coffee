import React from 'react'
import './Home.css'
import './MediaQurey.css';
const ButtonCompo = ({title}) => {
  return (
    <div className='btn-sec-compo'>
      <button className='btn-compo'>{title}</button>
    </div>
  )
}

export default ButtonCompo
