import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import typscript from '../assets/typescript.png'
import tailwind from '../assets/tailwind-css.svg'
import git from '../assets/git.png'
import bootstrap from '../assets/bootstrap.png'
import vscode from '../assets/vscode.png'
import reacjs from '../assets/reactjs.png'
import node from '../assets/nodejs.png'
import net8 from '../assets/.net.png'
import sql from '../assets/sql.png'
import sql2 from '../assets/sql2.png'

const Skills = ({skillsRef}) => {
  const SkillsArray = [
    {
      id: 1,
      nombre: 'VS Code',
      img: vscode
    },
    {
      id: 2,
      nombre: 'Html',
      img: html
    },
    {
      id: 3,
      nombre: 'Css',
      img: css
    },
    {
      id: 4,
      nombre: 'Javascript',
      img: javascript
    },
    {
      id: 5,
      nombre: 'Typescript',
      img: typscript
    },
    {
      id: 6,
      nombre: 'Tailwind',
      img: tailwind
    },
    {
      id: 7,
      nombre: 'Bootstrap',
      img: bootstrap
    },
    {
      id: 8,
      nombre: 'React',
      img: reacjs
    },
    {
      id: 9,
      nombre: 'NodeJS',
      img: node
    },
    {
      id: 10,
      nombre: 'Git',
      img: git
    },
    {
      id: 11,
      nombre: 'SQL',
      img: sql2
    },
    
    {
      id: 12,
      nombre: '.net 8',
      img: net8
    }
  ]

  return (
    // Backgroun degradado tailwind verde
    <div ref={skillsRef} className='
    bg-gradient-to-r from-green-200 via-green-300 to-green-500 text-gray-900
    px-4 py-5 '>
      <p className="text-center text-2xl py-10 mx-2 font-bold">Tengo experiencia usando estas tecnologías</p>
      <div className="flex flex-wrap gap-6 justify-center " >
        {SkillsArray.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center">
            <img src={skill.img
            } alt={skill.nombre} className="w-24 h-20" />
            <p className="text-center font-bold mt-4">{skill.nombre}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Skills