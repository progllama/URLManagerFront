import './App.css';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components'
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: stretch;
    height: 100%;
  `
  const SideBar = styled.nav`
    min-width: 300px;
    max-width: 300px;
    height: 100%;
    `

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand><h1>Url Plumber</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/sign_up">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Wrapper>
        <SideBar className="bg-light text-dark">
          <div className="sidebar-header">
            <h2>Link Lists</h2>
          </div>

          <ul className="list-unstyled components">
            <li className="active">
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Home 1</a>
                </li>
                <li>
                  <a href="#">Home 2</a>
                </li>
                <li>
                  <a href="#">Home 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </SideBar>
        <Container fluid>
          <h2>Url List Title</h2>
          <p>Test</p>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
