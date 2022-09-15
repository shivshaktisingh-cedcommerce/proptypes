import React from 'react'
import PropTypes from 'prop-types';

export default function Child2(props) {
    console.log(typeof(props.say))

  return (
    <div style={{border:"1px solid black"}}>
    <h1>Task 2</h1>
        <p>String : {props.namestr}</p>
        <p>Number : {props.number1}</p>
        <p>Boolean : {props.optbool}</p>
        <p onClick={props.say}>Function</p>
        <p>Object : {props.obj.name}</p>
  

    </div>
  )
}
Child2.propTypes = {
   name:PropTypes.string ,
   number1:PropTypes.number,
   optbool:PropTypes.bool,
   say:PropTypes.func,
   obj:PropTypes.object,
   
}
