import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <>
      <Image 
        src="/profile.png" 
        alt="Profile"
        width={250} 
        height={250} 
        className="rounded-full m-4 hover:scale-105 transform transition duration-500 ease-in-out hover:bg-[--color5]" 
      />
      <h1 className="text-5xl">Ricardo Erazo</h1>
      <p className="text-xl">Computer science engineer</p>
      <p className="text-xl">Front - End developer</p>
    </>
  );
};

export default Profile;