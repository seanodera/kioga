import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import HomeAd from '../components/HomeAd';
import FeaturedWorks from "../components/FeaturedWorks";
import MarketSection from "../components/MarketSection";
import {MdOutlineHomeWork} from "react-icons/md";
import {GiFactory, GiRailRoad} from "react-icons/gi";
import {LinkContainer} from 'react-router-bootstrap'

const Home = () => {
    return (
        <div style={{
            backgroundColor: '#262626',
        }}>
            <HomeAd/>
            <Container fluid>
                <Row style={{
                   minHeight: '150px'
                }}>
                    <Col className='p-0' sm={'12'} md={'4'} style={{
                        backgroundImage: 'url("/assets/image1.jpg")',
                        backgroundSize: 'cover',
                        height: '150px',
                    }}>
                        <div className='py-3 customCenter colorThemeTrans' style={{
                            height: '100%',
                        }}>
                            <h5>Punctual Delivery Time</h5>
                            <p style={{
                                color: 'black'
                            }}>99% Delivered on time</p>
                        </div>
                    </Col>
                    <Col className='p-0' sm={'12'} md={'4'} style={{
                        height: '150px',
                        backgroundImage: 'url("/assets/image2.jpg")',
                        backgroundSize: 'cover'
                    }}>
                        <div className='py-3 customCenter' style={{
                            height: '100%',
                            backgroundColor: 'rgba(38, 38, 38, 0.6)'
                        }}>
                            <h5 >High Technology Factory</h5>

                            <p style={{
                                color: 'white'
                            }}>& Environment Friendly</p>
                        </div>
                    </Col>
                    <Col className='p-0' sm={'12'} md={'4'} style={{
                        height: '150px',
                        backgroundImage: 'url("/assets/image3.jpg")',
                        backgroundSize: 'cover'
                    }}>
                        <div className='py-3 customCenter' style={{
                            height: '100%',
                            WebkitBackdropFilter: 'contrast(20%)',
                            backdropFilter: 'contrast(20%)',
                        }}>
                            <h5 >High Standard Labors</h5>
                            <p style={{
                                color: 'white'
                            }}>99% QC Passed</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={'py-5'}>
                <Row>
                    <Col sm={'12'} md={'4'} className={'text-white'}>
                        <MdOutlineHomeWork className={'my-3'}  size={40}/>

                        <h5 className={'text-secondary'}>Residential Property</h5>
                        <p className={'limitLines'}>Due to the fact that it is almost every person's dream to have their
                            own home and the freedom that comes with it, it is in our best interest to ensure that we
                            help these dreamers become achievers,in that regard, from start to finish.
                            The networks and relationships we have with manufacturers and suppliers of building
                            material, furnishing and home improvement equipment enables us to do high quality work at
                            lower prices as compared to if one decides to get the work done independently or through
                            alternative contractors.</p>
                        <LinkContainer to={'/sector/residential'}>
                            <p className={'text-secondary'}>Learn More</p>
                        </LinkContainer>
                    </Col>
                    <Col sm={'12'} md={'4'} className={'text-white'}>
                        <GiFactory className={'my-3'} size={40}/>
                        <br/>
                        <h5 className={'text-secondary'}>Commercial Property</h5>
                        <p className={'limitLines'}>Real estate has proved over time that it is a very reliable and cash
                            flow generative investment. From apartments to office buildings to warehouses to shopping
                            centers to hotels, more and more people are putting their money in commercial properties.
                            We provide construction solutions to individuals, developers, corporate clients and
                            government entities in this sector.</p>
                        <LinkContainer to={'/sector/commercial'}>
                            <p className={'text-secondary'}>Learn More</p>
                        </LinkContainer>
                    </Col>
                    <Col sm={'12'} md={'4'} className={'text-white'}>
                        <GiRailRoad className={'my-3'}  size={40}/>
                        <br/>
                        <h5 className={'text-secondary'}>Infrastructure</h5>
                        <p className={'limitLines'}>We are an experienced contractor for both the national and county
                            governments and have been offering road and railway construction services since our founding
                            15 years ago.</p>
                        <LinkContainer to={'/sector/infrastructure'}>
                            <p className={'text-secondary'}>Learn More</p>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <FeaturedWorks/>

            <MarketSection/>

            <Container fluid>
                <Row className={'py-3 px-0 mt-4 text-white'}>
                    <Col md={'6'}>
                        <h2 className={'text-white'}>Kioga Construction's Story</h2>
                    </Col>
                    <Col md={'6'} className={'text-start'}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a dolor faucibus, bibendum
                            nunc eget, dapibus mauris. Cras ac augue nibh. Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Nunc vulputate lectus dui. Quisque interdum,
                            augue non blandit tempor, nunc velit facilisis metus, vel commodo augue ligula vel nibh.
                            Aenean ultricies justo non est luctus, non egestas diam fermentum. Sed tincidunt purus nibh,
                            quis malesuada neque placerat at. Interdum et malesuada fames ac ante ipsum primis in
                            faucibus. Duis lobortis porttitor ullamcorper. Aenean finibus purus urna, vel tempor ipsum
                            consequat a. Etiam et euismod nisi, et cursus turpis. Aliquam sit amet odio ut sapien
                            volutpat consectetur. Proin placerat dignissim sapien nec semper. Nam at euismod magna, et
                            pharetra est. Sed felis felis, dictum ultrices tempus vel, malesuada in tortor.
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home