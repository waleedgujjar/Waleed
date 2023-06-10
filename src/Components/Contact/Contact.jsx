import React from 'react'
import './Contact.css';
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import  { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kj238bf', 'template_3f6u87h', form.current, 'F4mkybFO8avnjqmxu'
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <MdEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>waleednisar43@gmail.com</h5>
          <a href='mailto:waleednisar43@gmail.com' target= "_blank">Send A message</a>
        </article>
        <article className='contact__option'>
          <BsMessenger className='contact__option-icon'/>
          <h4>Messanger</h4>
          <h5>Chaudhary Waleed</h5>
          <a href='https://m.me/waleed.gujjar.750/' target="_blank" >Send A message</a>
        </article>
        <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
          <h4>Linkedin</h4>
          <h5>Muhammad Waleed Nisar</h5>
          <a href='https://www.linkedin.com/in/muhammad-waleed-software-engineer/' target="_blank">Send A message</a>
        </article>
    </div>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required />
      <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
</div>
  </section>
   )
}

export default Contact