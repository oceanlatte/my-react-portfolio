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
      description: 'Lead groups of 5-8. Maintained composure in times of high volume and stress. Effectively organized and communicated daily goals.'
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

  const certificates = [
    { 
      certTitle: 'Full Stack Web Development',
      from: 'University of Wisconsin Extended Campus',
      certDate: 'November 2022',
      certPhoto: null,
    },
    {
      certTitle: 'Learn React Course',
      from: 'Codecademy',
      certDate: 'January 2023',
      certPhoto: null
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
    <div className='px-3 resume mt-4' id='resume'>
      <h2 className='section-title'>Resume 🖇️</h2>
      <p>Download a copy of my resume ✨<a href={require('../assets/files/ocean-veliz-resume.pdf')} download='ocean-veliz-resume'>
        here</a>
        ✨</p>
      <article className='d-flex flex-wrap'>
        {/* Start of Professional Cards  */}
        <div id='professional-cards' className='container-fluid'>
          {/* Experience card */}
          <div className='card-container d-flex flex-wrap row'>
            <h3 className='mb-0 col-3 resume-headers'>Experience</h3>
                <div className='col-9'>
                {experienceInfo.map((job) => (
                  <div className='card d-flex m-3' key={job.jobTitle}>
                    <h4 className='card-header'>{job.jobTitle}</h4>
                    <ul>
                      <li>{job.company}</li>
                      <li>{job.datesEmployed[0]} - {job.datesEmployed[1]}</li>
                      <li>{job.description}</li>
                    </ul>
                  </div>
                ))}
                </div>
          </div>
          {/* Education Card  */}
            <div className='card-container d-flex flex-wrap row'>
            <h3 className='mb-0 col-3'>Education</h3>
            <div className='col-9'>
              {education.map((school) => (
                <div className='card m-3' key={school.name}>
                  <h4 className='card-header'>{school.name}</h4>
                  <ul>
                    <li>{school.timeframe}</li>
                    <li>{school.level}</li>
                  </ul>
                </div>
              ))}
              </div>
            </div>
            {/* Certifications Card  */}
          <div className='card-container d-flex flex-wrap row'>
            <h3 className='mb-0 col-3'>Certifications</h3>
              <div className='col-9'>
                {certificates.map((certificate) => (
                    <div className='card m-3' key={certificate.certTitle}>
                      <h4 className='card-header'>{certificate.certTitle}</h4>
                      <ul>
                        <li className='px-1'>{certificate.from}</li>
                        <li className='px-1'>{certificate.certDate}</li>
                      </ul>
                    </div>
                ))}
              </div>
          </div>
        {/* End Professional Cards  */}
        </div>

        <div className='text-center container-fluid mt-3 row gx-0'>
          <h3><span id='mern-span'>MERN</span> Stack Developer</h3>
          <ul className='list-group list-group-horizontal d-flex justify-content-center flex-wrap'>
            {mernStack.map((skill) => (
              <li className='px-5 list-group-item' key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className='row gx-0 container-fluid '>
        <div className='d-flex flex-wrap justify-content-evenly mt-5'>
          <div className='col-3'>
            <h4>Technologies</h4>
            <ul className='ju'>
              {techSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        
          <div className='col-3'>
            <h4>Soft Skills</h4>
              <ul>
                {softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
          </div>
          </div>
        </div>
      </article>
      
    </div>
  )
}

export default Resume;