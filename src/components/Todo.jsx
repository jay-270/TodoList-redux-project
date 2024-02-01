import React from 'react'

const Todo = ({ onClick, completed, text }) => (
  <ul 
  className='text row border border-dark'
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </ul>
)



export default Todo