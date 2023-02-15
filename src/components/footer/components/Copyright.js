import React from 'react'
import data from '../../../data/footer'

export const Copyright = () => {
  return (
    <div className='copyright'>
        <p>{ data.copyright.title } &copy; { data.copyright.subtitle }</p>
    </div>
  )
}
