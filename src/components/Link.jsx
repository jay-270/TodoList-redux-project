import React from 'react'

const Link = ({ active, children, onClick }) => (
  <button
  className='btn btn-primary'
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)


export default Link