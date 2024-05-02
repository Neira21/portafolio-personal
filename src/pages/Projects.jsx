import React from 'react'
import proyectos from '../json/proyectos.json'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    // Redirigir a la página de inicio
    navigate('/')
  }

  return (
    <div className='pt-14' >
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={goToHome}>Volver a Inicio</button>
      <h1 className='text-3xl text-center pt-4 mb-3'> Proyectos</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className='bg-white shadow-md rounded-md p-4'>
            {/* <img src={proyecto.img} alt={proyecto.nombre} className='w-full h-40 object-cover rounded-md' /> */}
            <h2 className='text-xl font-semibold mt-2'>{proyecto.nombre}</h2>
            <p className='text-gray-600'>{proyecto.descripcion}</p>
            <a href={proyecto.url} target='_blank' rel='noreferrer' className='text-blue-500 font-semibold'>Ver Github</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects