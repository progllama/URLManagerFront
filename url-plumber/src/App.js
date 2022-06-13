import './App.css';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components'
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const Wrapper = styled.div`
  padding-top: 15px;
  `
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand> Url Plumber</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/sign_up">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
