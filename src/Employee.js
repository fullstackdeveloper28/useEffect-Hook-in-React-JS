import React from 'react'
import './App.css';
function Employee(props) {
  return (
    <div className="App">
      <div>useEffec Demo! Count {props.count}</div>
      <div>useEffec Demo1! Count1 {props.count1}</div>
    </div>
  )
}

export default Employee
