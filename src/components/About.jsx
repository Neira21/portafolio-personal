import imagen from '../assets/Fotografia.jpg'
import { SocialIcon } from 'react-social-icons'


const About = () => {
  return (
    <div className='mx-8 pt-20 pb-10' >
      {/* h1 en negrita con tailwind */}
      <div className='md:flex md:justify-evenly'>
        <div className='w-full md:flex md:justify-center md:flex-col' >
          <h1 className="font-extrabold text-3xl text-center" >Alvaro Neira Riveros</h1>
          <p className='text-[18px] text-center mt-5 '>
            Hola, soy Alvaro y estudio para ser un desarrollador web fullstack.
            <br />
            <span className='text-[15px] text-center text-blue-600'>
              Html, Css, Javascript, ReactJS, Node.js, Express, NetCore, SQL, Git
          </span>
          </p>
        </div>
        <div className='mb-5 w-full flex justify-center'>
          <figure>
            <img src={imagen} className='rounded-full w-[200px] md:w-[300px] ' alt="" />
            <figcaption className='text-center'>Alvaro Neira Riveros</figcaption>
          </figure>
        </div>
      </div>
      <hr />
      <div className='flex justify-around items-center mt-3 relative z-1'>
        <SocialIcon 
        className='hover:scale-110 transition-transform duration-400 transform' url="https://github.com/Neira21" />
        <SocialIcon className='hover:scale-110 transition-transform duration-400 transform' url="https://www.linkedin.com/in/alvaro-neira-0129771b6/" />
        <SocialIcon className='hover:scale-110 transition-transform duration-400 transform' url="https://twitter.com/alvaro2167N" />
        <SocialIcon className='hover:scale-110 transition-transform duration-400 transform' network="email"href="mailto:alvaroneira98@gmail.com" />  
      </div>
    </div>
  )
}

export default About