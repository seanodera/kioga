import React from 'react'
import {Col, Row} from 'react-bootstrap';
import HomeAd from '../components/HomeAd';
import FeaturedWorks from "../components/FeaturedWorks";
import MarketSection from "../components/MarketSection";

const Home = () => {
    return (
        <>
            <HomeAd/>
            <section>
                <Row style={{
                    height: '150px'
                }}>
                    <Col className='p-0' style={{
                        backgroundImage: 'url("/assets/image1.jpg")',
                        backgroundSize: 'cover',
                        height: '100%',
                    }}>
                        <div className='py-3 customCenter' style={{
                            height: '100%',
                            backgroundColor: 'rgba(255, 23, 69, 0.9)',
                            top: '50%'
                        }}>
                            <h5>Punctual Delivery Time</h5>
                            <p style={{
                                color: 'black'
                            }}>99% Delivered on time</p>
                        </div>
                    </Col>
                    <Col className='p-0' style={{
                        height: '100%',
                        backgroundImage: 'url("/assets/image2.jpg")',
                        backgroundSize: 'cover'
                    }}>
                        <div className='py-3 customCenter' style={{
                            height: '100%',
                            backgroundColor: 'rgba(38, 38, 38, 0.6)'
                        }}>
                            <h5>High Technology Factory</h5>
                            <p style={{
                                color: 'white'
                            }}>& Environment Friendly</p>
                        </div>
                    </Col>
                    <Col className='p-0' style={{
                        height: '100%',
                        backgroundImage: 'url("/assets/image3.jpg")',
                        backgroundSize: 'cover'
                    }}>
                        <div className='py-3 customCenter' style={{
                            height: '100%',
                            WebkitBackdropFilter: 'contrast(20%)',
                            backdropFilter: 'contrast(20%)',
                        }}>
                            <h5>High Standard Labors</h5>
                            <p style={{
                                color: 'white'
                            }}>99% QC Passed</p>
                        </div>
                    </Col>
                </Row>
            </section>
            <FeaturedWorks/>
            <section>

               <Row className={'my-4 py-3 px-2'}>
                   <Col md={'3'}>
                       <h4>Market Sectors</h4>
                   </Col>
                   <Col md={'9'}>
                       <hr/>
                   </Col>
               </Row>
                <MarketSection/>
            </section>
            <section className={'py-3 mt-4'}>
                <Row>
                    <Col md={'6'}>
                        <h2>Koiga Construction's Story</h2>
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
            </section>
        </>
    )
}

export default Home