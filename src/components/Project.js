import React from 'react';
import codeQuiz from '../assets/images/project-shots/code-quiz-preview.png';
import cssPortfolio from '../assets/images/project-shots/portfolio-preview.jpg';
import weatherForecaster from '../assets/images/project-shots/weather-forecaster-preview.png';
import boozeNBinge from '../assets/images/project-shots/booze-n-binge-preview.png';
import scheduler from '../assets/images/project-shots/scheduler-preview.png';
import sinato from '../assets/images/project-shots/sinato-homepage.png';
import '../App.css';

function Project() {
  const projInfo = [{
      name: 'Code Quiz',
      link: 'https://oceanlatte.github.io/code-quiz/',
      gitHub: 'https://github.com/oceanlatte/code-quiz',
      image: codeQuiz
    }, 
    {
      name: 'CSS Portflio',
      link: 'https://oceanlatte.github.io/my-portfolio/',
      gitHub: 'https://github.com/oceanlatte/my-portfolio',
      image: cssPortfolio
    },
    {
      name: 'Weather Forecaster',
      link: 'https://oceanlatte.github.io/weather-forecaster/',
      gitHub: 'https://github.com/oceanlatte/weather-forecaster',
      image: weatherForecaster
    },
    {
      name: 'Booze N Binge',
      link: 'https://github.com/oceanlatte/booze-n-binge',
      gitHub: 'https://oceanlatte.github.io/booze-n-binge/',
      image: boozeNBinge
    },
    {
      name: 'Workday Scheduler',
      link: 'https://oceanlatte.github.io/workday-scheduler/',
      gitHub: 'https://github.com/oceanlatte/workday-scheduler',
      image: scheduler
    },
    {
      name: 'Sinato',
      link: 'https://sinato.herokuapp.com/',
      gitHub: 'https://github.com/oceanlatte/sinato',
      image: sinato
    }];

  
  return (
    <div className='card-container d-flex flex-wrap justify-content-around'>
    {projInfo.map((project) => (
          <div className='card m-3 mx-5 p-3 col-lg-5 col-sm-10' id='card-styling' key={project.name}>
            <h3><a href={project.link} target='_blank' rel='noreferrer'>{project.name}</a></h3>
            <p>View the <a href={project.gitHub}>GitHub repo</a></p>
            <img src={project.image} alt=''/>
          </div>

    ))}
      </div>
    )
}

export default Project