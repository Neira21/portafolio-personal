import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
import proyectos1 from '../json/proyectos.json';

const Proyectos = ({ proyectosRef }) => {

  const [proyectos, setProyectos] = useState(proyectos1.slice(0, 3));

  const navigate = useNavigate();
  const goToProjects = () => {
    // Redirigir a la página de proyectos
    navigate("/portafolio-personal/proyectos");
  };
  
  const colocandoImagenes = () => {
    console.log("asd")
  }

  useEffect(()=> {
    colocandoImagenes()
  },[])

  return (
    <div ref={proyectosRef} className="300 py-5 
      bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900
     text-white">
      <h2 className="text-3xl text-center pt-4 font-bold ">
        Experiencia/proyectos
      </h2>
      {/* centrar */}
      <div className="flex flex-wrap justify-center gap-4 m-[2rem]">
        {proyectos.map((proyecto) => (
          <Card style={{ width: "25rem" }} key={proyecto.id}>
            <Card.Img variant="top" src={proyecto.imagen} />
            <Card.Body className="flex flex-col justify-between">
              <Card.Title>{proyecto.nombre}</Card.Title>
              <Card.Text>{proyecto.descripcion}
              </Card.Text>
              <ul className="flex flex-wrap gap-2 my-3 text-white ">
                {proyecto.tecnologias.map((tecnologia, index) => (
                  <li className="font-bold bg-red-400 px-2 h-auto " key={index}>
                    {tecnologia}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  target="_blank"
                  className="font-bold btn bg-green-400 hover:bg-green-900 text-white"
                  href={proyecto.repositorio[0]}
                >
                  Repositorio git
                </a>
                {proyecto.website && (
                  <a
                    target="_blank"
                    className="btn bg-purple-400 hover:bg-purple-900  text-white"
                    href={proyecto.website[0]}
                  >
                    Ver Demo
                  </a>
                )}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="flex justify-end mr-5 ">
        <button
          className="bg-blue-400 px-4 py-2 rounded-xl font-bold
          hover:bg-blue-600 
          "
          onClick={goToProjects}
        >
          Ver más proyectos
        </button>
      </div>
    </div>
  );
};

export default Proyectos;
