import Header from '../components/Header';
import About from '../components/About';
import Proyectos from '../components/Proyectos';
import { useRef } from 'react';
import '../App.css'
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import proyectos from '../json/proyectos.json';


function Inicio() {

  

  const aboutRef = useRef(null);
  const proyectosRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header aboutRef={aboutRef} skillsRef={skillsRef} proyectosRef={proyectosRef} certificatesRef={certificatesRef} contactRef={contactRef} />
      <About aboutRef={aboutRef}/>
      <hr />
      <Skills skillsRef={skillsRef} />
      <hr />
      <Proyectos proyectosRef={proyectosRef} proyectos={proyectos} />
      <hr />
      <Certificates certificatesRef={certificatesRef} />
      <Footer></Footer>
    </div>
  )
}

export default Inicio
