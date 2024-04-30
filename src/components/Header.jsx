import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


const Header = ({proyectosRef}) => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  const scrollToProyectos = () => {
    proyectosRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full fixed">
      
      <div className="bg-slate-600 text-[20px] text-center py-2 text-white w-full flex justify-between">
        <p className="flex items-center">
          Alvaro Neira Riveros
        </p>
      <nav className="d-flex justify-end text-lg font-bold items-center md:justify-center lg:justify-center">
        <div className="hidden md:block">
          <ul className="d-flex justify-center mx-8">
            <li className="cursor-pointer p-3">¿Quién Soy?</li>
            <li className="cursor-pointer p-3">
                <a href="#" onClick={scrollToProyectos}>Experiencia/Proyectos</a>
            </li>

            <li className="text-center cursor-pointer p-3">Certificados</li>
            <li className="text-center cursor-pointer p-3">Habilidades</li>
            <li className="text-center cursor-pointer p-3">Contáctame</li>
            <li className="text-center cursor-pointer p-3">CV</li>
          </ul>
        </div>
        <div className="px-2 md:hidden ">
          <button onClick={handleClick}>
            <GiHamburgerMenu size={50} />
          </button>
        </div>
        {menu && (
          <div className="bg-gray-300 right-0 top-36 fixed md:relative w-64 transition-transform duration-300 transform translate-x-0 md:translate-x-full">
            <GrClose  className="cursor-pointer absolute right-0 m-1"  onClick={handleClick} size={35} />
            <ul className="d-flex flex-col gap-4 mt-8">
              <li className="cursor-pointer p-3">¿Quién Soy?</li>
              <li className="cursor-pointer p-3">
                <a href="#" onClick={scrollToProyectos}>Experiencia/Proyectos</a>
              </li>
              <li className="cursor-pointer p-3">Certificados</li>
              <li className="cursor-pointer p-3">Habilidades/programas</li>
              <li className="cursor-pointer p-3">Contáctame</li>
              <li className="cursor-pointer p-3">CV</li>
            </ul>
          </div>
        )}
      </nav>
    </div>
    </div>
  );
};

export default Header;
