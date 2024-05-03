import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Proyectos = ({ proyectosRef, proyectos }) => {
  const navigate = useNavigate();
  const goToProjects = () => {
    // Redirigir a la página de proyectos
    navigate("/proyectos");
  };
  // Solo obtener los 3 primeros proyectos
  proyectos = proyectos.slice(0, 3);

  return (
    <div ref={proyectosRef} className="300 py-5">
      <h2 className="text-green-800 text-3xl text-center pt-4">
        Experiencia/proyectos
      </h2>
      <div className="contenedor-proyectos">
        {proyectos.map((proyecto) => (
          <Card style={{ width: "25rem" }} key={proyecto.id}>
            <Card.Img variant="top" src={proyecto.imagen} />
            <Card.Body className="flex flex-col justify-between">
              <Card.Title>{proyecto.nombre}</Card.Title>
              <Card.Text>{proyecto.descripcion}
              
              </Card.Text>
              <ul className="flex flex-wrap gap-2 my-3 text-white ">
                {proyecto.tecnologias.map((tecnologia, index) => (
                  <li className="bg-red-400 px-2 h-auto " key={index}>
                    {tecnologia}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  target="_blank"
                  className="btn bg-green-400 hover:bg-green-900 text-white"
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
          className="bg-blue-400 px-4 py-2 rounded-xl"
          onClick={goToProjects}
        >
          Ver más proyectos
        </button>
      </div>
    </div>
  );
};

export default Proyectos;
