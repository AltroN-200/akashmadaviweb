import React from 'react'
import './MyWeb.css'
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Home from './Home/Home';
import About from './About/About'
import Resume from './Resume/Resume';
import { useState } from 'react';
import btn from './Button.module.css';
import { Link } from 'react-scroll';

export default function MyWeb() {
    window.onscroll = () => {
        document.querySelectorAll('.items').forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 500;
            let height = sec.offsetHeight;
            if (top >= offset && top < offset + height) {
                sec.classList.add('animation');
            }
            else {
                sec.classList.remove('animation');
            }
        });
    };

    const [mstatus, setmstatus] = useState(false);
    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(false);

    return (
        <div>
            <header className='header'>
                <h1>AKASH</h1>
                <nav className={`ulist ${mstatus ? 'ulistact' : ''}`}>
                    <ul className={click ? 'active' : ''}>
                        <li><Link className='navli' to='home' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu} >Home</Link></li>
                        <li><Link className='navli' to='about' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}  >About</Link></li>
                        <li><Link className='navli' to='project' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu} >Project</Link></li>
                        <li><Link className='navli' to='resume' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu} >Resume</Link></li>
                        <li><Link className='navli' to='contact' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu} >Contact</Link></li>
                    </ul>
                </nav>
                <label htmlFor="checkbox"  >
                    <input type="checkbox" id='checkbox' className='checkbox' onClick={() => setmstatus(!mstatus)} />
                    <button className={btn.toggle}>
                        {
                            mstatus ? <span>&times;</span> : <span>&#9776;</span>
                        }
                    </button>
                    <div className="toggle">
                        <span className="top-line common"></span>
                        <span className="middle-line common"></span>
                        <span className="bottom-line common"></span>
                    </div>
                </label>
            </header>
            <main className='box'>
                <section className='items home' id='home'><Home /></section>
                <section className='items about' id='about'><About /></section>
                <section className='items project' id='project'><Project /></section>
                <section className='items resume' id='resume'><Resume /></section>
                <section className='items contact' id='contact'><Contact /></section>
            </main>
        </div>
    )
}
