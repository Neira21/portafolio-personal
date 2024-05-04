import {useEffect, useState} from "react";
import _proyectos from "../json/proyectos.json";
import { useNavigate } from "react-router-dom";


import net from "../assets/svg/net.svg";
import reactjs from "../assets/svg/reactjs.svg";

import html from '../assets/svg/html.svg'
import css from '../assets//svg/css.svg'
import javascript from '../assets/svg/javascript.svg'
import typscript from '../assets/svg/typescript.svg'
import tailwind from '../assets/tailwind-css.svg'



import node from '../assets/nodejs.png'
import sql from '../assets/sql2.png'
//import sql2 from '../assets/sql2.png'



const Projects = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    // Redirigir a la página de inicio
    navigate("/portafolio-personal");
  };
  const [proyectos, setProyectos] = useState(_proyectos)

  return (
    <div className="pt-14">
      <button
        className="fixed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={goToHome}
      >
        Volver a Inicio
      </button>
      <h1 className="text-3xl text-center pt-4 mb-3"> Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="bg-white shadow-md rounded-md p-4">
            {proyecto.imagen && (
              <img
                src={proyecto.imagen}
                alt={proyecto.nombre}
                className="w-full h-auto rounded-md"
              />
            )}
            <h2 className="text-xl font-semibold mt-2">{proyecto.nombre}</h2>
            <p className="text-gray-600">{proyecto.descripcion}</p>
            <ul className="flex flex-wrap gap-2 my-3">
              {proyecto.tecnologias.map((tecnologia, index) => (
                <li
                  key={index}
                  className="bg-blue-100 px-2 h-auto text-black rounded-md"
                >
                   <p>{tecnologia} 
                    {tecnologia === "ReactJS" && <img src={reactjs} alt="reactjs" className="w-6 h-6 inline-block " />}
                    {tecnologia === "Html" && <img src={html} alt="html" className="w-6 h-6 inline-block" />}
                    {tecnologia === "Css" && <img src={css} alt="css" className="w-6 h-6 inline-block" />}
                    {tecnologia === "Javascript" && <img src={javascript} alt="javascript" className="w-6 h-6 inline-block" />}
                    {tecnologia === "TypeScript" && <img src={typscript} alt="typescript" className="w-6 h-6 inline-block" />}
                    {tecnologia === "tailwind" && <img src={tailwind} alt="tailwind" className="w-6 h-6 inline-block" />}
                    {tecnologia === "Nodejs" && <img src={node} alt="nodejs" className="w-6 h-6 inline-block" />}
                    {(tecnologia === "mongodb" || tecnologia === "mysql" || tecnologia === "postgresql" || tecnologia === "sql server") && <img src={sql} alt="sql" className="w-6 h-6 inline-block" />}
                    {tecnologia === ".NetCore" && <img src={net} alt=".net" className="w-6 h-6 inline-block" />}


                   </p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <div>
                {proyecto.repositorio.length > 1 ? (
                  proyecto.repositorio.map((repo, index) => (
                    <a
                      key={index}
                      href={repo}
                      target="_blank"
                      rel="noreferrer"
                      className=" block text-blue-500 font-semibold"
                    >
                      Ver Github {index + 1}{" "}
                    </a>
                  ))
                ) : (
                  <a
                    href={proyecto.repositorio[0]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-semibold"
                  >
                    Ver Github
                  </a>
                )}
              </div>
              {/* <a href={proyecto.repositorio[0]} target='_blank' rel='noreferrer' className='text-blue-500 font-semibold'>Ver Github</a> */}
              <br />
              <div>
                {proyecto.website && proyecto.website.length > 1
                  ? proyecto.website.map((web, index) => (
                      <a
                        key={index}
                        href={web}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-blue-500 font-semibold"
                      >
                        Ver Demo {index + 1}
                      </a>
                    ))
                  : proyecto.website && (
                      <a
                        href={proyecto.website[0]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 font-semibold"
                      >
                        Ver Demo
                      </a>
                    )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
