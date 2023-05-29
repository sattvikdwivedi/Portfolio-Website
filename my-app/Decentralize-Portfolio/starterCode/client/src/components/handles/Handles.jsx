import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/sattvik-dwivedi-277544207" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://twitter.com/DIFFERENTONE18?t=pG3uk7n3bhzdwUsgBQr51w&s=09" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
      <a href="https://github.com/sattvikdwivedi" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>

    
    </section>
  )
}

export default Handles
