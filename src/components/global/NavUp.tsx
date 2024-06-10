import Button from './Button';

const NavUp: React.FC = () => {
  return (
    <nav className='px-2 w-full flex justify-end items-center space-x-2 h-12 bg-[--color5]'>
      <Button href="/myCV.pdf">My CV</Button>
    </nav>
  );
};

export default NavUp;