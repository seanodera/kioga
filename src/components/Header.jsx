import React from 'react'
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {LinkContainer} from 'react-router-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';


const Header = () => {
  return (
    <header>

      <Navbar variant={'dark'} bg={'primary'} expand='lg'  >
        <Container>
          <NavbarToggle aria-controls="basic-navbar-nav"/>
          <NavbarCollapse id={'basic-navbar-nav'} className={'mr-auto'}>
            <Nav>
              <LinkContainer className={'mx-1'} to={'/'}>
                <NavLink>
                  Home
                </NavLink>
              </LinkContainer>
              {/*<LinkContainer className={'mx-1'} to={'/sectors'}>*/}
              {/*  <NavLink>*/}
              {/*    Sectors*/}
              {/*  </NavLink>*/}
              {/*</LinkContainer>*/}
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
          
   
              {/*<LinkContainer className={'mx-1'} to={'/cart'}>*/}
              {/*  <NavLink>*/}
              {/*    <FaCartArrowDown size={18}/>*/}
              {/*  </NavLink>*/}
              {/*</LinkContainer>*/}
              
              <LinkContainer to={'/contact'}>
                <Button  className='ms-2' variant='outline-secondary' size='sm'>
                  Get Quote
                </Button>
              </LinkContainer>

        </Container>
      </Navbar>
    </header>
  )
}

export default Header