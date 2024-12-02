import './About.css'
import html_ic from './html-icon.png'
import css_ic from './css-icon.png'
import js_ic from './javascript-icon.png'
import react_ic from './react-icon.png'
// import CountUp from 'react-countup'

export default function About() {

  return (
    <>
      <div className='sk-info'>
        <h3>Skill</h3>
        <p>I am an experienced Frontend Developer with over a decoade of professional expertise in the field.</p>
        <div className='sk-box'>
          <div>
            <img alt='html' src={html_ic} />
            <h6>HTML 80% </h6><span className='bar' />
          </div>
          <div>
            <img alt='css' src={css_ic} />
            <h6>CSS 85%</h6><span className='bar' />
          </div>
          <div>
            <img alt='js' src={js_ic} />
            <h6>JavaScript 65%</h6><span className='bar' />
          </div>
          <div>
            <img alt='react' src={react_ic} />
            <h6>React 60%</h6><span className='bar' />
          </div>
        </div>
      </div>
      <div className='about-do'>
        <h3>What i do</h3>
        <p>My passion for frontend development is not only reflected in my extensive exprience but also in the enthusiasm and dedication I bring to each project</p>
        <div className='i-do do-1'>
          <span className='dev'>🖥️</span>
          <div>
            <h5>Fronted Developer</h5>
            <p>A frontend developer is responsible for creating the user interface of a website or web application using HTML, CSS, JavaScript, and React.</p>
          </div>
        </div>
        <div className='i-do do-2'>
          <span className='dev'>💻</span>
          <div>
            <h5>Web Design</h5>
            <p>Web design involves creating and styling websites for optimal user experience and aesthetic appeal.</p>
          </div>
        </div>
        <div className='i-do do-3'>
          <span className='dev'>📱</span>
          <div>
            <h5>App Design</h5>
            <p>App design focuses on creating user-friendly, visually appealing, and functional interfaces for mobile or desktop applications.</p>
          </div>
        </div>
      </div>
    </>

  )
}
