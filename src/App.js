import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown, Button, Card} from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';

function App() {
     return(
      // This is the div with classname App
      
      <div className="App">
      {/* This is the fragment */}
      <Fragment>
         {/* This is the Navbar  */}
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Rome Jewels</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<br />
      {/* This is the header */}
    <h1>Welcome</h1>
<br />
    
  {/* These are the 3 cards */}
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a camera card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://st.depositphotos.com/1038117/1246/i/450/depositphotos_12462950-stock-photo-color-of-autumn-in-paris.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  
    
{/* This is the form */}

<br/>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>


export default TextControlsExample;

export default GroupExample;
  
  
export default BorderExample;

      </Fragment>
      </div>
     )
};

export default App;