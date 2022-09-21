import React from 'react'
import {Button, Carousel, CarouselItem, Col, Container} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap";

const HomeAd = () => {
    return (<section>
        <Carousel>
            <CarouselItem>

                <Container fluid className={'px-0'}>
                    <div style={{
                        backgroundImage: 'url("/assets/cover.jpg")', backgroundSize: 'cover',
                    }}>
                        <div className='py-4' style={{
                            textAlign: 'center',
                            width: '100vw',
                            minHeight: '40vw',
                            aspectRatio: '2.5',
                            backdropFilter: 'contrast(80%)',
                            WebkitBackdropFilter: 'contrast(80%)',
                        }}>

                            <Col className='d-flex flex-column justify-content-around align-items-center fillSpace'
                                 style={{
                                     height: '100%'
                                 }}>
                                <h3 className={'text-secondary'}> Welcome To</h3>
                                <span className='d-flex flex-row ' style={{
                                    alignItems: 'center',
                                }}><h1 style={{
                                    fontSize: '4rem'
                                }}>Kioga</h1> <h1 className={'text-secondary'} style={{
                                    fontSize: '4rem'
                                }}
                                >Construction</h1></span>
                                <div style={{
                                    maxWidth: '50%',
                                }}><p className={'limitLines'} style={{color: 'white'}}>During our long history, we have
                                    built some of the most prominent
                                    buildings in Kenya with inhouse training skills</p>
                                </div>
                                <div>
                                    <LinkContainer to={'/about'}>
                                        <Button>
                                            Learn More
                                        </Button>
                                    </LinkContainer>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Container>

            </CarouselItem>
        </Carousel>
    </section>)
}

export default HomeAd