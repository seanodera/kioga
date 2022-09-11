import React from 'react'
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {LinkContainer} from 'react-router-bootstrap'
import {FaSearch} from "react-icons/fa";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
const Header = () => {
  return (
    <header>
      <Navbar variant={'dark'} bg={'primary'} sticky={'top'}>
        <Container>
          <NavbarToggle />
          <NavbarCollapse className={'mr-auto'}>
            <Nav>
              <LinkContainer className={'mx-1'} to={'/'}>
                <NavLink>
                  Home
                </NavLink>
              </LinkContainer>
              <LinkContainer className={'mx-1'} to={'/sectors'}>
                <NavLink>
                  Sectors
                </NavLink>
              </LinkContainer>
              <LinkContainer className={'mx-1'} to={'/portfolio'}>
                <NavLink>
                  Portfolio
                </NavLink>
              </LinkContainer>
              <LinkContainer className={'mx-1'} to={'/about'}>
                <NavLink>
                  About
                </NavLink>
              </LinkContainer>

              {/*<LinkContainer className={'mx-1'} to={'/shop'}>*/}
              {/*  <NavLink>*/}
              {/*   Shop*/}
              {/*  </NavLink>*/}
              {/*</LinkContainer>*/}
            </Nav>
          </NavbarCollapse>
          <Container fluid/>
          <LinkContainer className={'mx-1'} to={'/search'}>
                <NavLink>
                  <FaSearch size={18}/>
                </NavLink>
              </LinkContainer>
              {/*<LinkContainer className={'mx-1'} to={'/cart'}>*/}
              {/*  <NavLink>*/}
              {/*    <FaCartArrowDown size={18}/>*/}
              {/*  </NavLink>*/}
              {/*</LinkContainer>*/}
              
              <Button className='ms-2' variant='outline-secondary' size='sm'>
                Quote
              </Button>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header