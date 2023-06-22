import React from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../style/Home.css"
const Home = () => {
  return (
    <div className='home'>
      <div className="about">
        <h2> hi my name is Roy Gebrayel</h2>
        <div className="prompt"><p>a software dev with a passion for learning and create</p>
        <a href="http://github.com/roygebrayel" target="_blank" rel="noopener noreferrer">
        <GitHubIcon/>
        </a>
        <EmailIcon/>
        <LinkedInIcon/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> front-End</h2>
            <span> ReactJS , Angular , Redux</span>
          </li>

          <li className='item'>
            <h2> Backend </h2>
            <span>NodeJS  </span>
          </li>

          <li className='item'>
            <h2> languages </h2>
            <span> C++ , Java </span>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home