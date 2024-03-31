import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faVuejs, faNodeJs } from '@fortawesome/free-brands-svg-icons'


const Profile: React.FC = () => {

  const techs1 = [
    {icon: faHtml5, name: 'HTML', experience: 2},
    {icon: faCss3, name: 'CSS', experience: 2},
    {icon: faJs, name: 'JavaScript', experience: 2},
    {icon: faJs, name: 'TypeScript', experience: 1},
  ];
  const techs2 = [
    {icon: faReact, name: 'React', experience: 1},
    {icon: faVuejs, name: 'Vue.js', experience: 1},
    {icon: faReact, name: 'Next.js', experience: 1},
  ];
  const techs3 = [
    {icon: faNodeJs, name: 'Node.js', experience: 1},
    {icon: faNodeJs, name: 'Scrum', experience: 2},
  ];

  return (
    <>
      <h1 className="text-4xl mt-52 lg:mt-36">Technologies</h1>
      <div className='w-full flex flex-col px-12'>
        <h2 className="text-xl">Web Programming</h2>
        <ul className='tech flex justify-start w-full items-center space-x-4 pt-2 pb-4 px-6 overflow-x-auto'>
          {techs1.map((tech, index) => (
            <li key={index}>
              {
                tech.name === 'TypeScript' ? "" : <FontAwesomeIcon icon={tech.icon} className='w-1/3 text-[--color6]' />
              }
              <p>{tech.name}</p>
              <span className='experience'>{tech.experience} años de experiencia</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full flex flex-col px-12'>
        <h2 className="text-xl">Frameworks and libraries</h2>
        <ul className='tech flex justify-start w-full items-center space-x-4 pt-2 pb-4 px-6 overflow-x-auto'>
          {techs2.map((tech, index) => (
            <li key={index}>
              {
                tech.name === 'Next.js' ? "" : <FontAwesomeIcon icon={tech.icon} className='w-1/3 text-[--color6]' />
              }
              <p>{tech.name}</p>
              <span className='experience'>{tech.experience} años de experiencia</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full flex flex-col px-12'>
        <h2 className="text-xl">Knowledge</h2>
        <ul className='tech flex justify-start w-full items-center space-x-4 pt-2 pb-4 px-6 overflow-x-auto'>
          {techs3.map((tech, index) => (
            <li key={index}>
              {
                tech.name === 'Scrum' ? "" : <FontAwesomeIcon icon={tech.icon} className='w-1/3 text-[--color6]' />
              }
              <p>{tech.name}</p>
              <span className='experience'>{tech.experience} años de experiencia</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Profile;