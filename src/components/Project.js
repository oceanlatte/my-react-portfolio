import React from 'react';
import codeQuiz from '../assets/images/code-quiz-preview.png';
import cssPortfolio from '../assets/images/portfolio-preview.jpg';
import weatherForecaster from '../assets/images/weather-forecaster-preview.png';
import boozeNBinge from '../assets/images/booze-n-binge-preview.png';
import scheduler from '../assets/images/scheduler-preview.png';
import sinato from '../assets/images/sinato-homepage.png';

function Project() {
  const projInfo = [{
      name: 'Code Quiz',
      link: 'https://oceanlatte.github.io/code-quiz/',
      gitHub: 'https://github.com/oceanlatte/code-quiz',
      image: codeQuiz
    }, 
    {
      name: 'CSS Portoflio',
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
    projInfo.map((project) => (
      <div className='card-container'>
          <div className='card'>
            <h3>{project.name}</h3>
            <p>See the site <a href={project.link}>here</a></p> 
            <p>View the <a href={project.gitHub}>GitHub repo</a></p>
            <img src={project.image} alt=''/>
          </div>
      </div>

    ))
    )
}

export default Project