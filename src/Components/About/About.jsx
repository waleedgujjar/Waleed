import React from 'react'
import './About.css';
import Me from '../../Asstes/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaFolder} from 'react-icons/fa'
const About = () => {
  return (
<section id='about'>
  <h5>Get To Know</h5>
  <h2>About Me</h2>

  <div className='container about__container'>
    <div className='about__me'>
      <div className='about__me-image'>
        <img src={Me} alt='About Image'/>
      </div>
    </div>
    <div className='about__content'>
      <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>
        <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>Fiverr Or Upwork</small>
        </article>
        <article className='about__card'>
          <FaFolder className='about__icon'/>
          <h5>Projects</h5>
          <small>80+ Completed</small>
        </article>
      </div>
      <p>
      Hi, I'm Waleed I am Currently Complete My Bachelor's Degree
in Computer Science. I am Strong in design and integration
With intuitive Problem-Solving Skills. Proficient in C++, C,
Javascript, and SQL. I Work On React JS. Ability to translate
business requirements into technical Solutions.
      </p>
      <a href='#contact' className='btn btn-primary'> Let's Talk</a>
    </div>
  </div>
</section>  )
}

export default About