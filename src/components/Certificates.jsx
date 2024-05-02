import Accordion from 'react-bootstrap/Accordion';


const Certificates = ({certificatesRef}) => {
  return (
    <div ref={certificatesRef} className='pt-14' >
      <h1 className='text-3xl text-center pt-4 mb-3'> Certificados</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>FreeCodeCamp</Accordion.Header>
            <Accordion.Body>
              <h3>Examen 1</h3>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>Platzi</Accordion.Header>
            <Accordion.Body>
              <h3>Examen 1</h3>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header >Udemy</Accordion.Header>
            <Accordion.Body>
              <h3>Examen 1</h3>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Programador Full Stack</Accordion.Header>
            <Accordion.Body>
              <h3>Programa de entrenamiento intensivo Desarrollador Full Stack (Java/React) - 20 de Octubre 2021</h3>
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