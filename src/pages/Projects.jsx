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
      
      <img  alt="" />
      <button className='fixed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={goToHome}>Volver a Inicio</button>
      <h1 className='text-3xl text-center pt-4 mb-3'> Proyectos</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className='bg-white shadow-md rounded-md p-4'>
            {proyecto.imagen && <img src={proyecto.imagen} alt={proyecto.nombre} className='w-full h-auto rounded-md' />  } 
            <h2 className='text-xl font-semibold mt-2'>{proyecto.nombre}</h2>
            <p className='text-gray-600'>{proyecto.descripcion}</p>
            <ul className='flex flex-wrap gap-2 my-3'>
              {proyecto.tecnologias.map((tecnologia, index) => (
                <li key={index} className='bg-blue-500 px-2 h-auto text-white rounded-md'>{tecnologia}</li>
              ))}
            </ul>
            {proyecto.repositorio.length > 1 ?
              proyecto.repositorio.map((repo, index) => (
                <a key={index} href={repo} target='_blank' rel='noreferrer' className=' block text-blue-500 font-semibold'>Ver Github {index + 1} </a>
              ))
              :
              <a href={proyecto.repositorio[0]} target='_blank' rel='noreferrer' className='text-blue-500 font-semibold'>Ver Github</a>
            }
            {/* <a href={proyecto.repositorio[0]} target='_blank' rel='noreferrer' className='text-blue-500 font-semibold'>Ver Github</a> */}
            <br />
            {proyecto.website && <a href ={proyecto.website[0]} target='_blank' rel='noreferrer' className='text-blue-500 font-semibold'>Ver Demo</a>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects