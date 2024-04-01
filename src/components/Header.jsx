import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full">
      <nav className="d-flex justify-end text-lg font-bold h-[100px] items-center w-full md:justify-center lg:justify-center ">
        <div className="hidden md:block">
          <ul className="d-flex justify-center mx-8">
            <li className="text-center p-3 cursor-pointer mx-3">¿Quién Soy?</li>
            <li className="text-center p-3 cursor-pointer mx-3">Experiencia/Proyectos</li>
            <li className="text-center p-3 cursor-pointer mx-3">Certificados</li>
            <li className="text-center p-3 cursor-pointer mx-3">Habilidades</li>
            <li className="text-center p-3 cursor-pointer mx-3">Contáctame</li>
            <li className="text-center p-3 cursor-pointer mx-3">CV</li>
          </ul>
        </div>
        <div className="p-6 md:hidden">
          <button onClick={handleClick}>
            <GiHamburgerMenu size={50} />
          </button>
        </div>
        {menu && (
          <div className="bg-gray-300 right-0 top-36 z-10 fixed md:relative w-64 transition-transform duration-300 transform translate-x-0 md:translate-x-full">
            <GrClose className="cursor-pointer absolute right-0 m-1"  onClick={handleClick} size={45} />
            <ul className="d-flex flex-col gap-4 mt-8">
              <li className="cursor-pointer p-3">¿Quién Soy?</li>
              <li className="cursor-pointer p-3">Experiencia/Proyectos</li>
              <li className="cursor-pointer p-3">Certificados</li>
              <li className="cursor-pointer p-3">Habilidades/programas</li>
              <li className="cursor-pointer p-3">Contáctame</li>
              <li className="cursor-pointer p-3">CV</li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
