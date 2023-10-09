import React, { useState } from 'react'
import Info from './Info'
const About = () => {
  const [name, setName] = useState()
  

  
  return (
    <div>
      <h1>my name is {name}</h1>
      <Info contact = {8390302033} goingToChild={setName}/>
    </div>
  )
}

export default About