import React from 'react';

function Resume() {
  const experienceInfo = [
    {
      jobTitle: 'Patient Account Representative I',
      company: 'Optum',
      datesEmployed: ['April 2020', 'current'],
      description: "Track and maintain trends to bring to team's attention. Independently meet daily goals."
    },
    {
      jobTitle: 'Shift Supervisor',
      company: 'Starbucks',
      datesEmployed: ['July 2014', 'July 2021'],
      description: 'Lead groups of 5-8. Maintained composure in times of high volume and stress. Effectively organized and communicated goals.'
    }
  ];

  const education = [
    {
      level: 'High School Diploma',
      timeframe: '2011 - 2014',
      name: 'De Forest Area High School',
    },
    {
      level: 'Certficate',
      timeframe: 'May 2022 - November 2022',
      name: 'University of Wisconsin'
    }
  ];

  const softSkills = [
    'Communication',
    'Discipline',
    'Organization',
    'Time Managment',
    'Dependability',
    'Stewardship'
  ];
  
  const mernStack = [
    'MongoDB',
    'Express.js',
    'React.js',
    'Node.js'
  ];

  const techSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Git',
    'jQuery',
    'Bootstrap',
    'MySQL',
    'GraphQL',
    'JSON',
    'DOM Manipulation',
    'MVC paradigm',
    'Agile Project Management',
  ];

  return (
    <div className='px-3 resume' id='resume'>
      <h2 className='section-title'>Resume 🖇️</h2>
      <p>Download a copy of my resume ✨<a href={require('../assets/files/ocean-veliz-resume.pdf')} download='ocean-veliz-resume'>
        here</a>
        ✨</p>
      <article className='ps-4'>
        <h3>Experience</h3>
        <div className='card-container'>
            {/* JOB descriptions */}
            {experienceInfo.map((job) => (
              <div className='card col-lg-5 col-sm-8 m-3'>
                <h4 className='card-header'>{job.jobTitle}</h4>
                <ul>
                  <li>{job.company}</li>
                  <li>{job.datesEmployed[0]} - {job.datesEmployed[1]}</li>
                  <li>{job.description}</li>
                </ul>
              </div>
            ))}
        </div>
        <div>
          <h3>Education</h3>
          <div className='card-container d-flex flex-wrap'>
            {education.map((school) => (
              <div className='card m-3 col-lg-3 col-sm-5'>
                <h4 className='card-header'>{school.name}</h4>
                <ul>
                  <li>{school.timeframe}</li>
                  <li>{school.level}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='text-center mt-3'>
          <h3><span id='mern-span'>MERN</span> Stack Developer</h3>
          <ul className='list-group list-group-horizontal d-flex justify-content-center'>
            {mernStack.map((skill) => (
              <li className='px-5 list-group-item'>{skill}</li>
            ))}
          </ul>
        </div>

        <div className='d-flex flex-wrap mt-5 justify-content-center'>
          <div className='mx-2'>
            <h4>Technologies</h4>
            <ul>
              {techSkills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
        
          <div className='mx-2'>
            <h4>Soft Skills</h4>
              <ul>
                {softSkills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
          </div>
        </div>
      </article>
      
    </div>
  )
}

export default Resume;