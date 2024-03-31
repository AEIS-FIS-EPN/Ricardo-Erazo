import Profile from '../components/page/Profile';
import Technologies from '../components/page/Technologies';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className='min-h-screen flex flex-col justify-center items-center pt-48 lg:pt-24'>
        <Profile />
      </section>
      <section id="technologies" className="min-h-screen flex flex-col justify-center items-center">
        <Technologies />
      </section>
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl">Projects</h1>
      </section>
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl">Contact</h1>
      </section>
    </main>
  );
}
