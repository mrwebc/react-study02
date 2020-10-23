import React from 'react'

function NewHello(props){
  console.log(props)
  return(
    <div className="hello">
      <h2>{props.name}</h2>
      <p>{props.children}</p>
    </div>
  )
}

export default NewHello