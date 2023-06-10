import React from 'react'
import './Services.css';
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='service'>
  <h5>
    What I Offer
  </h5>
  <h2>Services</h2>

  <div className='container services__container'>
<article className='service'>
  <div className='service_head'>
    <h3>Software Engineer</h3>
  </div>
  <ul className='service__list'>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>Software Development</p>
    </li>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>Software Consulting</p>
    </li>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>Software Testing and Quality Assurance</p>
    </li>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>Database Design and Development</p>
    </li>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>Software Project Management</p>
    </li>
  </ul>
</article>
<article className='service'>
  <div className='service_head'>
    <h3>Mern Stack Web Developer</h3>
  </div>
  <ul className='service__list'>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>Custom Web Application Development</p>
    </li>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>Full-Stack Development</p>
    </li>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>Single-Page Application (SPA) Development</p>
    </li>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>RESTful API Development</p>
    </li>
    <li>
      <BiCheck className="service__list-icon"/>
      <p>Database Design and Integration</p>
    </li>
  </ul>
</article>
  </div>
</section>
  )
}

export default Services