import React from 'react'
import PropTypes from 'prop-types';

export default function Data(props) {
    
  return (
    <div style={{border:"1px solid black"}}>
     <h1>Task 3</h1>
     <p> Name : {props.name}</p>
     <p> Marks : {props.marks}</p>

    </div>
  )
}
Data.propTypes = {
    name: PropTypes.string.isRequired,
    marks:PropTypes.number,
    total:PropTypes.func
  };
