import Accordion from 'react-bootstrap/Accordion';
import {certificadosPlatzi} from '../json/certificados.json'

const Certificates = ({certificatesRef}) => {
  return (
    <div ref={certificatesRef} className='pb-24 bg-gradient-to-r from-green-200 via-green-300 to-green-500' >
      <h1 className='text-3xl text-center pt-4 mb-3 font-bold'> Certificados</h1>
        <Accordion className='mx-8 ' >
          <Accordion.Item eventKey="0">
            <Accordion.Header >FreeCodeCamp</Accordion.Header>
            <Accordion.Body >
              <h3 className='mb-3'>Responsive Web Design - 2 de Abril 2024</h3>
              <a className='btn btn-primary' href="https://www.freecodecamp.org/certification/fcc3ca90c22-4c38-43aa-9972-d6b15060e207/responsive-web-design">Visualizar</a>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>Platzi</Accordion.Header>
            {certificadosPlatzi.map((certificado, index) => (
              <Accordion.Body key={index}>
                <h3>{certificado.nombre}</h3>
                <a className='btn btn-primary' href={certificado.url}>Visualizar</a>
              </Accordion.Body>
            )
            )}
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header >Udemy</Accordion.Header>
            <Accordion.Body >
              <h3>HTML: Desde cero (Aprende y Domina HTML5) + Infografías - 9 de Diciembre 2021</h3>
              <a className='btn btn-primary' href='https://www.udemy.com/certificate/UC-0444c02a-4ce9-4d9d-a044-3b81d997545d/'>Visualizar</a>
            </Accordion.Body>
            <Accordion.Body >
              <h3>Curso Javascript 2021- 9 de Diciembre 2021</h3>
              <a className='btn btn-primary' href='https://www.udemy.com/certificate/UC-304b4e19-445b-4e90-85f3-b19451a17b7b/'>Visualizar</a>
            </Accordion.Body>
            <Accordion.Body >
              <h3>NPL. Procesamiento de Lenguaje Natural con NPL y Python - 15 de Diciemnbre 2021</h3>
              <a className='btn btn-primary' href='https://www.udemy.com/certificate/UC-0516580d-195d-458e-a654-23c60e35dfbd/'>Visualizar</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Capacitacion Baufest</Accordion.Header>
            <Accordion.Body>
              <h3>Baufest - Programa de entrenamiento intensivo Desarrollador Full Stack (Java/React) - 20 de Octubre 2021</h3>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Cisco</Accordion.Header>
            <Accordion.Body>
              <h3>CCNAv7: Introduction to Networks - 25 de Junio 2021</h3>
            </Accordion.Body>
            <Accordion.Body>
              <h3>Introduction to IoT - 10 de Noviembre 2019	</h3>
            </Accordion.Body>
            <Accordion.Body>
              <h3>Cybersecurity Essentials - 9 noviembre 2019 </h3>
            </Accordion.Body>
            <Accordion.Body>
              <h3>Introduction to Cybersecurity - 27 de octubre 2019</h3>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default Certificates