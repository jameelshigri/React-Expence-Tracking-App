import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div className='button-layout'>
    <button className="button" onClick={props.method} type={props.type}>{props.name}</button>
    </div>
  )
}

export default Button