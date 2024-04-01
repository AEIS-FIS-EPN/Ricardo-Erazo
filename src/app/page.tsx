import Profile from '../components/page/Profile';
import Technologies from '../components/page/Technologies';
import Projects from '../components/page/Projects';
import Contact from '../components/page/Contact';

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
        <Projects />
      </section>
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-[--color5]">
        <Contact />
      </section>
    </main>
  );
}
