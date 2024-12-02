import React from 'react'
import './Project.css'
import calculator from './Calculator.jpg'
import bbc from './BBC.jpg'
import weather from './Weatherlogo.jpg'
import to_do from './To-do.jpg'
import userform from './Userform.jpg'
import { Link } from 'react-router-dom'

export default function Project() {

  return (
    <>
      <h3 className='pro-h3'>My Project</h3>
      <p className='pro-p'>I hereby declare that all the above information given by me is completely true at the best extent of my knowledge.</p>
      <div className='pro'>
        <Link to='../BBCnews' className='pro-box'>
          <h5>BBC News<span>&rarr;</span></h5>
          <p>It covers topics such as politics, sports, entertainment, and world affairs.</p>
          <img src={bbc} alt='bbc' />
        </Link>
        <Link to="../UserForm" className='pro-box'>
          <h5>UserForm<span>&rarr;</span></h5>
          <p>It includes only the most important details, avoiding lengthy explanations.</p>
          <img src={userform} alt='userform' />
        </Link>
        <Link to="../Weather" className='pro-box'>
          <h5>Weather<span>&rarr;</span></h5>
          <p>Weather refers to the atmospheric conditions in a specific place at a particular time and including temperature.</p>
          <img src={weather} alt='weather' />
        </Link>
        <Link to="../Todo" className='pro-box'>
          <h5>To-do<span>&rarr;</span></h5>
          <p>A to-do list is a simple list of tasks or activities that need to be completed.</p>
          <img src={to_do} alt='to-do' />
        </Link>
        <Link to="../Calculator" className='pro-box'>
          <h5>Calculator<span>&rarr;</span></h5>
          <p>A calculator is an electronic device or software used to perform mathematical calculations.</p>
          <img src={calculator} alt='calculator' />
        </Link>
      </div>
    </>
  )
}
