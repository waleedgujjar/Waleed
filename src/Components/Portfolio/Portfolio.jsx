import React from 'react'
import './Portfolio.css';
import IMG1 from '../../Asstes/portfolio1.png'
import IMG2 from '../../Asstes/portfolio2.png'
import IMG3 from '../../Asstes/portfolio3.png'
import IMG4 from '../../Asstes/portfolio4.png'
import IMG5 from '../../Asstes/portfolio 5.png'
import IMG6 from '../../Asstes/portfolio6.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
  <h5> My Recent Work</h5>
  <h2> Portfolio </h2>
  <div className='container portfolio__container'>
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG1} alt=''/>
      </div>
      <h3>Education Website Using React JS</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/waleedgujjar"  className='btn'>GitHub</a>
      <a href="https://educationwebsitereact.netlify.app/" className='btn btn-primary'> Live Demo</a>
      </div>
    </article>
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG2} alt=''/>
      </div>
      <h3>Front End Code Editor Using React JS</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/waleedgujjar"  className='btn'>GitHub</a>
      <a href="https://frontendcodeeditorreact.netlify.app/" className='btn btn-primary'> Live Demo</a>
      </div>
    </article>
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG3} alt=''/>
      </div>
      <h3>Quiz App Using React JS</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/waleedgujjar"  className='btn'>GitHub</a>
      <a href="https://github.com/waleedgujjar/quizapp" className='btn btn-primary'> Live Demo</a>
      </div>
    </article>
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG4} alt=''/>
      </div>
      <h3>Calculator Using React JS</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/waleedgujjar"  className='btn'>GitHub</a>
      <a href="https://github.com/waleedgujjar/calculator" className='btn btn-primary'> Live Demo</a>
      </div>
    </article>
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG5} alt=''/>
      </div>
      <h3>To DO List App Using React JS</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/waleedgujjar"  className='btn'>GitHub</a>
      <a href="https://github.com/waleedgujjar/To-Do-List" className='btn btn-primary'> Live Demo</a>
      </div>
    </article>
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG6} alt=''/>
      </div>
      <h3>Calender App Using React JS</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com/waleedgujjar"  className='btn'>GitHub</a>
      <a href="https://github.com/waleedgujjar/calender-app" className='btn btn-primary'> Live Demo</a>
      </div>
    </article>
  </div>
</section>
  )
}

export default Portfolio