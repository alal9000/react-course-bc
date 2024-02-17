import React from 'react'

const Button2 = () => {

    const handleClick = () => console.log("Ouch");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`); 


  return (
    <button onClick={handleClick2('steve')}>Click Me</button>
  )
}

export default Button2