import React from 'react'
import {Col, Container, Navbar, NavLink, Row} from 'react-bootstrap'
import {FaLocationArrow, FaMailBulk, FaPhone} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlineWhatsApp
} from "react-icons/ai";


const FooterNav = ({to, name}) => {
    return (
        <LinkContainer to={to}>
            <NavLink>
                {name}
            </NavLink>
        </LinkContainer>

    )
}

const Footer = () => {
    return (
        <footer className='bg-primary pb-3'>
            <Navbar className='bg-dark'>

                <Container className='py-3'>
                    <Row className='text-start text-white'>
                        <Col sm={'12'} md={'4'} className={'border-end footerBorder'}>
                            <LinkContainer to={'/'}>
                              <span className='d-flex flex-row ' style={{
                                  alignItems: 'center',
                              }}><h4 className={'text-white'} >Real</h4> <h4 className={'text-secondary'}>Construction</h4></span>
                            </LinkContainer>

                            <p style={{
                                fontWeight: '200',
                                textTransform: 'none',
                                letterSpacing: '1px',
                                fontSize: '0.875rem',
                            }}>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                            </p>
                        </Col>
                        <Col sm={'12'} md={'4'} className={'border-end '}>
                            <h5 className='text-secondary'>Quick Links</h5>
                            <FooterNav to={'/'} name='Home'/>
                            <FooterNav to={'/portfolio'} name='Portfolio'/>
                            <FooterNav to={'/about'} name='About'/>
                        </Col>

                        <Col sm={'12'} md={'4'}>
                            <h5 className='text-secondary'>Contact Info</h5>
                            <p><FaLocationArrow className='colorTheme'/> Some Road. City, Country</p>
                            <p><FaPhone className='colorTheme'/> +1 (515) 567-2929</p>
                            <p><FaMailBulk className='colorTheme'/> contact@site.com</p>
                            <Row sm={'12'}>
                                <Col ><a href={'https://google.com'} className={'text-white'}><AiOutlineWhatsApp size={24}/></a></Col>
                                <Col ><a href={'https://google.com'} className={'text-white'}><AiOutlineFacebook size={24}/></a></Col>
                                <Col ><a href={'https://google.com'} className={'text-white'}><AiOutlineInstagram size={24}/></a></Col>
                                <Col ><a href={'https://google.com'} className={'text-white'}><AiOutlineMail size={24}/></a></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <br/>
            &copy; Real Factory 2022

        </footer>
    )
}

export default Footer