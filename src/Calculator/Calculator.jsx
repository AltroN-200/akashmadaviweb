/* eslint-disable no-eval */
import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {

  const [number, setNumber] = useState('');

  function handle(e) {
    setNumber(number + e.target.value)
  }

  function Del(e) {
    setNumber(number.slice(0, -1))
  }

  function AC(e) {
    setNumber('')
  }

  function equal(e) {
    setNumber(eval(number))
  }

  function percetage(e){
    setNumber(number/100)
  }

  return (
    <div className='bg-cal'>
        <div className='calculator' >
          <input className='display' id='display' defaultValue={number} placeholder='0' type='textbox' />
          <div>
            <button className='yellow' onClick={AC} value={'AC'}>AC</button>
            <button className='yellow' onClick={Del} value={'Del'}>Del</button>
            <button className='yellow' onClick={percetage} value={'%'}>%</button>
            <button className='yellow' onClick={handle} value={'/'}>/</button>
          </div>
          <div>
            <button onClick={handle} value={7}>7</button>
            <button onClick={handle} value={8}>8</button>
            <button onClick={handle} value={9}>9</button>
            <button className='yellow' onClick={handle} value={'*'}>*</button>
          </div>
          <div>
            <button onClick={handle} value={4}>4</button>
            <button onClick={handle} value={5}>5</button>
            <button onClick={handle} value={6}>6</button>
            <button className='yellow' onClick={handle} value={'-'}>-</button>
          </div>
          <div>
            <button onClick={handle} value={1}>1</button>
            <button onClick={handle} value={2}>2</button>
            <button onClick={handle} value={3}>3</button>
            <button className='yellow' onClick={handle} value={'+'}>+</button>
          </div>
          <div>
            <button value={0} onClick={handle}>0</button>
            <button value={'.'} onClick={handle}>.</button>
            <button className='equal yellow' onClick={equal} value={'='}>=</button>
          </div>
        </div>
    </div>
  )
}
