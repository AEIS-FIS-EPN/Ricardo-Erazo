'use client';

const NavBar: React.FC = () => {
  const goSection = (section: string) => () => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 p-24">
      <h1 className="text-5xl">
        Hello World!
      </h1>
      <ul className='flex justify-center items-center space-x-8'>
        <li>
          <button onClick={goSection('home')}>Home</button>
        </li>
        <li>
          <button onClick={goSection('technologies')}>Technologies</button>
        </li>
        <li>
          <button onClick={goSection('projects')}>Projects</button>
        </li>
        <li>
          <button onClick={goSection('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;