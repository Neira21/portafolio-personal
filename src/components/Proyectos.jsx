import { useNavigate } from "react-router-dom"


const Proyectos = ({proyectosRef, proyectos}) => {

  const navigate = useNavigate()

  const goToProjects = () => {
    // Redirigir a la página de proyectos
    navigate('/proyectos')
  }

  // Solo obtener los 3 primeros proyectos
 proyectos = proyectos.slice(0, 3)

  return (
    <div ref={proyectosRef} className="300 py-5">
      <h2 className="text-green-800 text-3xl text-center pt-4">Experiencia/proyectos</h2>
      <div className="contenedor-proyectos">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="border-2 border-green-800 p-4 my-4 rounded-lg shadow-2xl 
          bg-green-100 mx-4
          ">
            <h3 className="text-2xl text-green-800 text-center ">{proyecto.nombre}</h3>
            <p className="text-green-800">{proyecto.descripcion}</p>
            <ul className="flex flex-wrap gap-2 my-3 text-white ">
              {proyecto.tecnologias.map((tecnologia, index) => (
                <li className="bg-red-400 px-2 h-auto " key={index}>{tecnologia}</li>
              ))}
            </ul>
            <div className="flex justify-around ">
              <button className="btn bg-green-400 hover:bg-red-700 hover:text-white">Repositorio git</button>
              <button className="btn bg-purple-500">Ver Demo</button>

            </div>
          </div>
        ) )}
      </div>
      <div className="flex justify-end ">
          <button className="bg-blue-400 px-4 py-2 rounded-xl" onClick={goToProjects}>Ver más proyectos</button>
      </div>
    </div>
  )
}

export default Proyectos