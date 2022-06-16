import './App.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: stretch;
  `
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
}

function Header() {
  return (
    <Navbar className="h-100" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand><h1>Url Plumber</h1></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/sign_up">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function Content() {
  const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  `

  return (
    <Wrapper>
      <SideBar />
      <Container>
        <Main />
      </Container>
    </Wrapper>
  )
}

function SideBar() {
  const Wrapper = styled.nav`
      min-width: 270px;
      max-width: 270px;
      flex-grow: 1;
      `
  return (
    <Wrapper className="bg-light text-dark">
      <div className="sidebar-header">
        <h2>Lists</h2>
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
    </Wrapper>
  );
}

function Main() {
  const Wrapper = styled.div`
  margin-top: 30px;
  margin-left: 5%;
  `
  return (
    <Wrapper>
      <h2>List Title</h2>
      <p></p>
      <hr />
      <p></p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </Wrapper>
  );
}

export default App;
