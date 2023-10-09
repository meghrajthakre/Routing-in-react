import React, { useState } from 'react'

const Info = (m) => {
    const myname = "Meghraj"
    m.goingToChild(myname)


  return (
    <div>my information is 
        <br />
        and  {} my contact number is {m.contact} 
    </div>
  )
}

export default Info