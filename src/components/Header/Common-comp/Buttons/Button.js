import React from 'react'
import "./Button.css";

const Button = ({ buttonText, onClick, customClasses, Img }) => {
  return (
    <div className={`flex absolute-center button-wrap ${customClasses}`} onClick={onClick}>{Img} {buttonText}</div>
  )
}

export default Button