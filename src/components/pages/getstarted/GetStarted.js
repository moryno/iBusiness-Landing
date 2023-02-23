import React from 'react'
import './getstarted.css'
import data from '../../../data/pages/getstarted'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const GetStarted = () => {
  return (
    <div className='gs-container'>
        <div className='gs-info'>
            <p className='gs-header'>{ data.header }</p>
            <p className='gs-description'>{ data.subheader }</p>
            <ul className='gs-list'>
                {data.functions.map(func => (
                <li key={func}><FontAwesomeIcon icon={faCheck} />&nbsp;&nbsp;{func}</li>
                ))}
            </ul>
        </div>
        <div className='gs-form'>
            <p className='gs-subheader'>{ data.s_subheader }</p>
            <div className='gs-inputs'>
                {data.fields.map(input => (
                <input type={ input.type } placeholder={ input.value } className='gs-form-control' />
                ))}
                <button value="Submit" className='gs-button'>{ data.btn_text }</button>
            </div>
        </div>
    </div>
    )
}
