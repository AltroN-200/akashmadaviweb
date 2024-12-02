import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fb from './fb.png';
import insta from './insta.png';
import whatsapp from './whatsapp.png';
import twiter from './twiter.png'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_0ul42l5';
    const templateID = 'template_oqrtr3z';
    const publicKey = 'nKd4pv-ehhVul8dF9';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web site company hire',
      message: message
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully ', response);
        setName('');
        setEmail('');
        setMessage('');
        notifysucced();
      })
      .catch((error) => {
        console.error('Error sending email ', error);
        notifyerror();
      })
  }

  const notifysucced = () => toast.success('Email sent successfully',
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyerror = () => toast.error('Error sending email', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <>
      <div className='contact-detail'>
        <ToastContainer />
        <h3>Contact Me</h3>
        <p>I'm currently avaliable to take on new projects, so feel to send me a message about anything that you want me to work on. You can contact anytime.</p>
        <h6>✉️ <span>akashmadavi2001@gmail.com</span></h6>
        <h6>📞 <span>9021232883</span></h6>
        <div className='contact-img'>
          <img src={whatsapp} alt="" />
          <img src={fb} alt="" />
          <img src={twiter} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
      <div className='contact-info'>
        <form action="#" onSubmit={handleSubmit}>
          <h5>
            <label htmlFor='uname'>Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} id='uname' placeholder='Your Name' required />
          </h5>
          <h5>
            <label htmlFor='uemail'>Email</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} id='uemail' placeholder='Your Email' required />
          </h5>
          <h5>
            <label htmlFor='message'>Message</label>
            <textarea type='text' value={message} onChange={(e) => setMessage(e.target.value)} id='message' placeholder='Your Message' />
          </h5>
          <button className='btn'>Send Message »</button>
        </form>
      </div>
    </>
  )
}
