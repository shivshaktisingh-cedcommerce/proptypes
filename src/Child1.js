import React from 'react'
import PropTypes from 'prop-types';

export default function Child1(props) {
    // console.log(typeof(props.name))

  return (
    <div style={{border:"1px solid black"}}>
      <h1>Task 1</h1>
        <p>Name : {props.name}</p>
  

    </div>
  )
}
Child1.propTypes = {
   name:PropTypes.string 
   
}
