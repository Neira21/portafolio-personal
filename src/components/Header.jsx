import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = ({aboutRef, proyectosRef, skillsRef, certificatesRef, contactRef}) => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  const scrollToRef = (ref) => {
    const currentPos = window.scrollY;
    const targetPos = ref.current.offsetTop;

    // Calcula la distancia entre la posición actual de la página y la posición del ref
    const distance = targetPos - currentPos;

    // Desplaza suavemente hacia el ref correspondiente
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: distance >= 0 ? 'start' : 'end' // Mueve el ref al principio o al final de la vista
    });
  };
 
  return (
    <div className="w-full fixed z-50">
      <div className="bg-slate-600 text-[20px] text-center py-2 text-white w-full flex justify-between">
        <p className="flex items-center ml-4">
          Alvaro Neira Riveros
        </p>
      <nav className="d-flex justify-end text-lg font-bold items-center md:justify-center lg:justify-center">
        <div className="hidden md:block">
          <ul className="d-flex justify-center mx-8">
            <li className="cursor-pointer p-3">
              <a href="#" onClick={()=>scrollToRef(aboutRef)}>Acerca de mí</a>
            </li>
            <li className="text-center cursor-pointer p-3">
              <a href="#" onClick={()=>scrollToRef(skillsRef)}>Habilidades</a>
            </li>
            <li className="cursor-pointer p-3">
                <a href="#" onClick={()=>scrollToRef(proyectosRef)}>Experiencia/Proyectos</a>
            </li>
            <li className="text-center cursor-pointer p-3">
              <a href="#" onClick={()=>scrollToRef(certificatesRef)}>Certificados</a>
            </li>
            <li className="text-center cursor-pointer p-3">
              <a href="#" onClick={()=>scrollToRef(contactRef)}>Contáctame</a>
            </li>
            <li className="text-center cursor-pointer p-3">
              <a href="https://drive.google.com/file/d/1YZNFNCvYM0O5oS1TSkV1w3YEvlMJPm7v/export?format=pdf" download>Descargar archivo PDF</a>
            </li>
          </ul>
        </div>
        <div className="px-2 md:hidden ">
          <button onClick={handleClick}>
            <GiHamburgerMenu size={50} />
          </button>
        </div>
        {menu && (
          // gradiente oscuro azulado
          <div className=" 
            bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white
            rounded-3xl
           right-0 top-20 fixed w-64 transition-transform duration-300 transform">
            <GrClose  className="cursor-pointer absolute right-0 m-1"  onClick={handleClick} size={35} />
            <ul className="d-flex flex-col gap-4 mt-8">
              <li className="cursor-pointer p-3">
                <a href="#" onClick={()=>scrollToRef(aboutRef)}
                >Acerca de mí</a>
              </li>
              <li className="cursor-pointer p-3">
                <a href="#" onClick={()=>scrollToRef(skillsRef)}
                >Habilidades/programas</a>
              </li>
              <li className="cursor-pointer p-3">
                <a href="#" 
                onClick={()=>scrollToRef(proyectosRef)}
                 >Experiencia/Proyectos</a>
              </li>
              <li className="cursor-pointer p-3">
                <a href="#" 
                onClick={()=>scrollToRef(certificatesRef)}
                >Certificados</a>
              </li>
              <li className="cursor-pointer p-3">
                <a href="#" 
                onClick={()=>scrollToRef(contactRef)}
                >Contáctame</a>
              </li>
              <li className="cursor-pointer p-3">
              <a href="https://drive.google.com/file/d/1YZNFNCvYM0O5oS1TSkV1w3YEvlMJPm7v/export?format=pdf" download>Descargar archivo PDF</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
    </div>
  );
};

export default Header;
