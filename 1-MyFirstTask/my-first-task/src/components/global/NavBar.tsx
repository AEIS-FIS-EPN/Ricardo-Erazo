'use client';
import { useState, useEffect } from 'react';

const NavBar: React.FC = () => {

  const [activeSection, setActiveSection] = useState('home');

  const goSection = (section: string) => () => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '0px', threshold: 0.5 });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <nav className={`navbar w-full flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 ${activeSection === 'home' ? 'duration-700 p-24 pb-10': 'duration-700 p-10'}`}>
        <h1 className="text-5xl">
        <span className="typing-animation">
          {
            activeSection === 'home' ? 'Hello World!' : 'Ricardo Erazo'
          }
        </span>
        </h1>
        <ul className='flex justify-center items-center space-x-8'>
          <li>
            <button className={activeSection === 'home' ? 'active' : ''} onClick={goSection('home')}>Home</button>
          </li>
          <li>
            <button className={activeSection === 'technologies' ? 'active' : ''} onClick={goSection('technologies')}>Technologies</button>
          </li>
          <li>
            <button className={activeSection === 'projects' ? 'active' : ''} onClick={goSection('projects')}>Projects</button>
          </li>
          <li>
            <button className={activeSection === 'contact' ? 'active' : ''} onClick={goSection('contact')}>Contact</button>
          </li>
        </ul>
      </nav>
      {
        activeSection !== 'home' && (
          <button
            className="fixed w-[50px] h-[50px] bottom-4 right-4 bg-[--color2] rounded-full hover:bg-[--color3] transition-all duration-300 z-10 hover:scale-110"
            onClick={goSection('home')}
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        )
      }
    </>
  );
};

export default NavBar;