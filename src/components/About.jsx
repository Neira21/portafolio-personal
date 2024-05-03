import imagen from '../assets/Fotografia.jpg'
import { SocialIcon } from 'react-social-icons'


const About = ({aboutRef}) => {
  return (
    // Backgroun degradado tailwind
    <div ref={aboutRef} className='pt-20 pb-10  
    bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900
     text-gray-900
    ' >
      {/* h1 en negrita con tailwind */}
      <div className='md:flex md:justify-evenly'>
        <div className='w-full px-5 md:flex md:justify-center md:flex-col' >
          <h1 className="font-extrabold text-white text-3xl text-center" >Alvaro Neira Riveros</h1>
          <p className='text-[18px] text-white text-center mt-5 '>
            Hola, soy Alvaro y estudio para ser un desarrollador web fullstack.
            <span className='block mt-3 font-bold text-blue-300 text-center '>
              Html, Css, Javascript, ReactJS, Node.js, Express, NetCore, SQL, Git
          </span>
          </p>
        </div>
        <div className='mb-5 w-full flex justify-center'>
          <figure>
            <img src={imagen} className='rounded-full w-[200px] md:w-[300px] ' alt="" />
            <figcaption className='text-center text-gray-400 '>Alvaro Neira Riveros</figcaption>
          </figure>
        </div>
      </div>
      <p className='mb-4 px-12 text-green-100 '>
        Soy egresado de la Universidad de San Martín de Porres. Tengo experiencia desarrollando proyectos personales y de la universidad.
      </p>
      <p className='mb-4 px-12 text-green-100'>
        Cuento con conocimientos sobre el desarrollo de software, desarrollo frontend, backend, base de datos, gestión de versiones GIT y metodologías ágiles con SCRUM. Dispuesto a seguir aprendiendo nuevas tecnologías y seguir las últimas tendencias sobre el sector con el objetivo de seguir mejorando mis habilidades como programador.
      </p>

      <hr />
      <div className='flex justify-around items-center mt-3 relative z-[1]'>
        <SocialIcon fgColor= ""
        className='hover:scale-110 transition-transform duration-400 transform' url="https://github.com/Neira21" />
        <SocialIcon className='hover:scale-110 transition-transform duration-400 transform' url="https://www.linkedin.com/in/alvaro-neira-0129771b6/" />
        <SocialIcon className='hover:scale-110 transition-transform duration-400 transform' url="https://twitter.com/alvaro2167N" />
        <SocialIcon className='hover:scale-110 transition-transform duration-400 transform' network="email"href="mailto:alvaroneira98@gmail.com" />  
      </div>
    </div>
  )
}

export default About