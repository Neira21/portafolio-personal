import imagen from '../assets/Fotografia.jpg'

const About = () => {
  return (
    <div className='mx-8 py-9' >
      {/* h1 en negrita con tailwind */}
      <h1 className="font-extrabold text-lg text-center" >Alvaro Neira Riveros</h1>
      <p className='text-[18px] text-center '>
        Hola, soy Alvaro y estudio para ser un desarrollador full stack. 
      </p>
      <p className='text-[15px] text-center'>
        Tecnologías que manejo:
        Html, Css, Javascript
        ReactJS y Angular
        Api Rest con Node.js, Express
      </p>
      <div className='d-flex w-full justify-center' style={{ borderRadius:"50%"}}>
        <figure>
          <img src={imagen} style={{ borderRadius:"50%" }} width={150} alt="" />
          <figcaption className='text-center'>Alvaro Neira Riveros</figcaption>
        </figure>
      </div>

    </div>
  )
}

export default About