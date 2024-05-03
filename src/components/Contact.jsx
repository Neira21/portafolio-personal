import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = ({contactRef}) => {
  return (
    <div ref={contactRef} className='mx-3 pb-20 ' >
      <h1 className="text-3xl text-center pt-4">Contacto</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  )
}

export default Contact