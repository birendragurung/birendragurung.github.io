import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import WorkWithMe from './components/WorkWithMe';
import Work from './components/Work';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <WorkWithMe />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
