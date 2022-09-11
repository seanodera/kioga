import React from 'react'
import {Button, Carousel, CarouselItem, Col} from 'react-bootstrap'

const HomeAd = () => {
    return (<section>
        <Carousel>
            <CarouselItem>

                <div style={{
                    backgroundImage: 'url("/assets/cover.jpg")', backgroundSize: 'cover',
                }}>
                    <div className='py-4' style={{
                        textAlign: 'center',
                        width: '100vw',
                        height: '40vw',
                        backdropFilter: 'contrast(80%)',
                        WebkitBackdropFilter: 'contrast(80%)',
                    }}>
                        <Col className='d-flex flex-column justify-content-around align-items-center' style={{
                            height: '100%'
                        }}>
                            <h3 style={{
                                color: '#FF1744'
                            }}> Welcome To</h3>
                            <span className='d-flex flex-row ' style={{
                                alignItems: 'center',
                            }}><h1 style={{fontSize: '60px',}}>Kioga</h1> <h1
                                style={{fontSize: '60px', color: '#ff1744'}}>Construction</h1></span>
                            <div style={{
                                maxWidth: '50%',
                            }}><p style={{color: 'white'}}>During our long history, we have built some of the most prominent
                                buildings in Kenya with inhouse training skills</p>
                            </div>
                            <div>
                                <Button>
                                    Learn More
                                </Button>
                            </div>
                        </Col>
                    </div>
                </div>

            </CarouselItem>
        </Carousel>
    </section>)
}

export default HomeAd