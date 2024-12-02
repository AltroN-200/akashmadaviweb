import React from 'react'
import img1 from './Akash.png'
import './Home.css'
import { Link } from 'react-scroll'

export default function Home() {
    return (
        <>
            <div className='info'>
                <h1><span>Hi,</span> <span>I'm</span> <span>Akash</span> <span>Madavi</span> </h1>
                <h3><span>Frontend</span> <span>Developer</span></h3>
                <p>To make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.</p>
                <Link to='contact'>
                    <button> Hire Me &rarr;</button>
                </Link>
            </div>
            <div className='info2'>
                <img src={img1} alt="img" />
            </div>
        </>
    )
}
