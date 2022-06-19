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
    <Navbar bg="primary" variant="dark">
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
  overflow-y: hidden;
  `

  return (
    <Wrapper>
      <SideBar />
      <Main />
    </Wrapper>
  )
}

function SideBar() {
  const Wrapper = styled.nav`
      min-width: 270px;
      max-width: 270px;
      overflow-y: scroll;
      border-right: solid 1px gray;
      `

  const Title = styled.h2`
  margin: 20px;
  `

  const ListItem = styled.div`
    padding-left: 20px;
  `

  return (
    <Wrapper className="text-dark">
      <Title>Lists</Title>

      <ul>
        <li className="no-styled">
          sample
        </li>
      </ul>
    </Wrapper>
  );
}

function Main() {
  const Wrapper = styled.div`
  margin: 20px auto 20px 50px;
  width: 100%;
  overflow-y: scroll;
  `

  const Title = styled.h2`
  `

  return (
    <Wrapper>
      <Title>List Title</Title>
      <p></p>
      <hr />
      <p></p>
      <p>Test</p>
    </Wrapper>
  );
}

export default App;
