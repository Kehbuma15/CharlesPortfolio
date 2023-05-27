import React from 'react'
import './about.css'
import moi from '../../assets/keh.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know few things</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Charles" />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Little experience both in frontend and backend</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Portfolios</h5>
                <small>first portfolio</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>None completed apart from school group projects</small>
              </article>
            </div>
            <p>
              I am a young growing computer engineer undergoing training at the Faculty of
              Engineering and Technology(FET) of the University of Buea . I am in level 300 presently.
              
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
