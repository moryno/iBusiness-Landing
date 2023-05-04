import React from 'react'

export const NotFound = () => {
  return (
    <div style={{
        height: '37.7vw',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    }}>
        <p className='notfound-header'>404</p>
        <p className='notfound-text'>Page not found</p>
    
    </div>
  )
}
