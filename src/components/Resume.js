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

  const softSkills = [
    'Communication',
    'Discipline',
    'Organization',
    'Time Managment',
    'Dependability',
    'Stewardship'
  ];

  const techSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Git',
    'jQuery',
    'Bootstrap',
    'Node.js',
    
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


  return (
    <div className='ps-3'>
      <h2 className='section-title'>Resume 🖇️</h2>
      <p>Download a copy of my resume: here</p>
      <article>
        <div className='card-container'>
          <h3>Experience</h3>
            {/* JOB descriptions */}
            {experienceInfo.map((job) => (
              <div className='card'>
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
              <div className='card-container'>
                {education.map((school) => (
                  <div className='card'>
                    <h4 className='card-header'>{school.name}</h4>
                    <ul>
                      <li>{school.timeframe}</li>
                      <li>{school.level}</li>
                    </ul>
                  </div>
                ))}
              </div>
        </div>
        <div>
          <h3>MERN Stack</h3>
          <h4>Technologies</h4>
          <ul>
            {techSkills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Soft Skills</h4>
              <ul>
                {softSkills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
        </div>
      </article>
      
    </div>
  )
}

export default Resume;