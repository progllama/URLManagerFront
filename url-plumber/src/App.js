import './App.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components'
import { FaBookOpen, FaHome } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

// const axios = require('axios');
// const apiClient = axios.create({
//   baseURL: 'http://localhost:8000',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest'
//   },
//   responseType: 'json'
// });

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: stretch;
  `

function App() {
  const [login] = useState(false)
  const [userId] = useState()

  return (
    <AppWrapper>
      <Header login={login} />
      <Content userId={userId} />
    </AppWrapper>
  );
}

function Header(props) {
  let headerMenu;
  if (props.login) {
    headerMenu = <Nav.Link href="/logout">Logout</Nav.Link>;
  } else {
    headerMenu = (
      <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/sign_up">Sign Up</Nav.Link>
      </>
    )
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand><h1>Url Plumber</h1></Navbar.Brand>
        <Nav className="me-auto">
          {headerMenu}
        </Nav>
      </Container>
    </Navbar>
  );
}

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  `

function Content() {
  return (
    <ContentWrapper>
      <SideBar />
      <Main />
    </ContentWrapper>
  )
}

const SidebarWrapper = styled.nav`
      min-width: 270px;
      max-width: 270px;
      overflow-y: scroll;
      `


function SideBar() {
  const [open, setOpen] = useState(false)
  const [linkList, setLinkList] = useState([])
  let toggleActive = true;

  return (
    <SidebarWrapper>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FaHome />} >Home</MenuItem>
          <SubMenu open={open} title="Components" onClick={() => {
            if (toggleActive) {
              setOpen(!open);
            }
            toggleActive = true;
          }} icon={<FaBookOpen onClick={() => {
            toggleActive = false;
          }} />} >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <SubMenu title="My favorite">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu title="My favorite2">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </SidebarWrapper >
  );
}

function SubMenuSet() {
  return (
    <SubMenu open={open} title="Components" onClick={() => {
      if (toggleActive) {
        setOpen(!open);
      }
      toggleActive = true;
    }} icon={<FaBookOpen onClick={() => {
      toggleActive = false;
    }} />} >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
      <SubMenu title="My favorite">
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
      </SubMenu>
    </SubMenu>
  )
}

const MainWrapper = styled.div`
      margin: 20px auto 20px 50px;
      width: 100%;
      overflow-y: scroll;
      `

const MainTitle = styled.h2`
      `

function Main() {
  const test = []
  for (let i = 0; i < 100; i++) {
    test.push(<li key={i}>This is test.</li>)
  }
  return (
    <MainWrapper>
      <MainTitle>List Title</MainTitle>
      <p></p>
      <hr />
      <p></p>
      <ul>
        {test}
      </ul>
    </MainWrapper>
  );
}

export default App;
