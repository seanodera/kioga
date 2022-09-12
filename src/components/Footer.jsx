import React from 'react'
import {Col, Container, Nav, Navbar, NavLink, Row} from 'react-bootstrap'
import {FaLocationArrow, FaMailBulk, FaPhone} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
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

                <Container className='py-3 navbar-dark'>
                    <Nav className='text-start text-white'>
                        <Col className={'border-end footerBorder'}>
                            <LinkContainer to={'/'}>
                              <span className='d-flex flex-row ' style={{
                                  alignItems: 'center',
                              }}><h4 className={'text-white'} >Kioga</h4> <h4 className={'text-secondary'}>Construction</h4></span>
                            </LinkContainer>

                            <p style={{
                                fontWeight: '200',
                                textTransform: 'none',
                                letterSpacing: '1px',
                                fontSize: '0.875rem',
                            }}>
                                A construction Company based in Nairobi.
                                Been in the industry since 2008 and we have built everything from residential to commercial properties
                            </p>
                        </Col>
                        <Col className={'border-end ms-4'}>
                            <h5 className='text-secondary'>Market Sectors</h5>
                            <FooterNav to={'/auto'} name=' Automotive Parts & System'/>
                            <FooterNav to={'/construction'} name='construction & Engineering'/>
                            <FooterNav to={'/power'} name=' Power & Energy '/>
                            <FooterNav to={'/aero'} name='Aero Space '/>
                            <FooterNav to={'/shipsector'} name='Ship Building Industry'/>
                            <FooterNav to={'/rail'} name='Railway'/>
                        </Col>
                        <Col>

                        </Col>
                        <Col>
                            <h5 className='text-secondary'>Contact Info</h5>
                            <p><FaLocationArrow className='colorTheme'/> Haile Selassie. Nairobi, Kenya</p>
                            <p><FaPhone className='colorTheme'/> +254 212345678</p>
                            <p><FaMailBulk className='colorTheme'/> contact@site.com</p>
                            <Row className={''}>
                                <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineWhatsApp size={24}/></a></Col>
                                <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineLinkedin size={24}/></a></Col>
                                <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineFacebook size={24}/></a></Col>
                                <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineInstagram size={24}/></a></Col>
                                <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineMail size={24}/></a></Col>
                            </Row>
                        </Col>
                    </Nav>
                </Container>
            </Navbar>
            <br/>
            &copy; Real Factory 2022

        </footer>
    )
}

export default Footer