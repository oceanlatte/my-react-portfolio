import React from "react";
import learnTesting from '../assets/images/certificates/codecademy-learn-testing-cert.jpg';
import learnReact from '../assets/images/certificates/codecademy-react-cert.jpg';
import fullStackCert from '../assets/images/certificates/full-stack-cert.jpg';
import advJavaScript from '../assets/images/certificates/ed2go-adv-js-cert.jpg';

function Resume() {
  const experienceInfo = [
    {
      jobTitle: "Patient Account Representative I",
      company: "SSM Health",
      datesEmployed: ["April 2020", "current"],
      description:
        "Ensure daily production goals are met while working independently. Track and address trends or issues and report them to the team and leadership. Effectively manage resources to resolve issues and conduct research to improve daily work. Organize and maintain notes and resources for the team to reference regarding trending issues.",
    },
    {
      jobTitle: "Shift Supervisor",
      company: "Starbucks",
      datesEmployed: ["July 2014", "July 2021"],
      description:
        "Lead groups of 5-8. Maintained composure in times of high volume and stress. Effectively organized and communicated daily goals.",
    },
  ];

  const education = [
    {
      level: "High School Diploma",
      timeframe: "2011 - 2014",
      name: "De Forest Area High School",
    },
    {
      level: "Certficate",
      timeframe: "May 2022 - November 2022",
      name: "University of Wisconsin Extended Campus",
    },
  ];

  const certificates = [
    {
      certTitle: "Full Stack Web Development",
      from: "University of Wisconsin Extended Campus",
      certDate: "November 2022",
      certPhoto: fullStackCert,
    },
    {
      certTitle: "Learn React Course",
      from: "Codecademy",
      certDate: "January 2023",
      certPhoto: learnReact,
    },
    {
      certTitle: "Advanced JavaScript Concepts",
      from: "ed2go",
      certDate: "February 2024",
      certPhoto: advJavaScript,
    },
    {
      certTitle: "Learn Testing for Web Development",
      from: "Codecademy",
      certDate: "February 2024",
      certPhoto: learnTesting,
    }
  ];

  const softSkills = [
    "Analytical Thinking",
    "Communication",
    "Discipline",
    "Helping Others",
    "Organization",
    "Prioritization",
    "Time Managment",
    "Dependability",
    "Stewardship",
    "Working with Minimal Supervision",
  ];

  const mernStack = ["MongoDB", "Express.js", "React.js", "Node.js"];

  const techSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "jQuery",
    "Bootstrap",
    "MySQL",
    "GraphQL",
    "JSON",
    "DOM Manipulation",
    "MVC paradigm",
    "Agile Project Management",
  ];

  return (
    <div className="px-3 resume mt-4" id="resume">
      <h2 className="section-title">Resume 🖇️</h2>
      <p>
        Download a copy of my ✨
        <a
          href={require("../assets/files/ocean-veliz-resume-2024.pdf")}
          download="ocean-veliz-resume"
        >
          resume
        </a>
        ✨
      </p>
      <article className="d-flex flex-wrap text-center mt-5">
        {/* Start of Professional Cards  */}
        <div id="professional-cards" className="container-fluid">
          {/* Experience card */}
          <div className="card-container d-flex flex-wrap row mb-5">
            <h3 className="mb-0 col-3 resume-headers">Experience</h3>
            <div className="col-8">
              {experienceInfo.map((job) => (
                <div className="card d-flex m-3" key={job.jobTitle}>
                  <h4 className="card-header">{job.jobTitle}</h4>
                  <ul className="card-text list-style">
                    <li>{job.company}</li>
                    <li>
                      {job.datesEmployed[0]} - {job.datesEmployed[1]}
                    </li>
                    <li>{job.description}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Certifications Card  */}
          <div className="card-container d-flex flex-wrap row mb-5">
            <h3 className="mb-0 col-3">Certifications</h3>
            <div className="col-8">
              {certificates.map((certificate) => (
                <div className="card m-3" key={certificate.certTitle}>
                  <h4 className="card-header">{certificate.certTitle}</h4>
                  <ul className="card-text pt-2 mb-0 list-style">
                    <li className="px-1">{certificate.from}</li>
                    <li className="px-1">{certificate.certDate}</li>
                  </ul>
                  <img src={certificate.certPhoto} alt={certificate.certTitle} className="card-img-bottom mt-0" />
                </div>
              ))}
            </div>
          </div>
          {/* Education Card  */}
          <div className="card-container d-flex flex-wrap row mb-5">
            <h3 className="mb-0 col-3">Education</h3>
            <div className="col-8">
              {education.map((school) => (
                <div className="card m-3" key={school.name}>
                  <h4 className="card-header">{school.name}</h4>
                  <ul className="list-style">
                    <li>{school.timeframe}</li>
                    <li>{school.level}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* End Professional Cards  */}
        </div>

        <div className="container-fluid mt-3 row gx-0">
          <h3>
            <span id="mern-span">MERN</span> Stack Developer
          </h3>
          <ul className="list-group list-group-horizontal d-flex justify-content-center flex-wrap">
            {mernStack.map((skill) => (
              <li className="px-5 list-group-item" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="row gx-0 container-fluid ">
          <div className="d-flex flex-wrap justify-content-evenly mt-5">
            <div className="col-3">
              <h4>Technologies</h4>
              <ul className="text-start">
                {techSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="col-3">
              <h4>Soft Skills</h4>
              <ul className="text-start">
                {softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Resume;
