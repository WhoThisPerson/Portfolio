import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import './index.css';

const HomePage = () => {

  return (
    <main>
      <Header />
      <main className="pt-20 bg-gray-dark text-gray-light min-h-screen">
        <section><About /></section>
        <section><Experience /></section>
        <section><Education /></section>
        <section><Projects /></section>
      </main>
    </main>
  );
}

export default HomePage;
