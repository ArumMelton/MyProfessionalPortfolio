import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function myContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Name" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Your Email" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 xl" style={{innerHeight:"20px"}} controlId="formBasicBody">
        <Form.Label></Form.Label>
        <Form.Control type="message" placeholder="Your message here." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className=""label="       Click to Email Me" />
      </Form.Group>
      <Button variant="flat" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default myContactForm;
