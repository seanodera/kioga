import React from 'react'
import {Carousel, CarouselItem, Col, Container, NavLink, Row} from "react-bootstrap";
import {BsArrowRight} from "react-icons/bs";
import {LinkContainer} from "react-router-bootstrap";
import Work from "../components/Work";
import {works} from "../podo/TempData";


const Portfolio = () => {

    return (
        <div style={{
            backgroundColor: '#262626'
        }}>
            <section className={'bg-dark'}>
                <Carousel>
                    {works.map((work, index) => <CarouselItem className={'colorTheme-bg py-3 verticalCenter'} style={{
                        width: '100vw',
                        aspectRatio: '3.5',

                    }}>
                        <Row className={' fillSpace my-5 py-3 mx-0'}>
                            <Col className={'fillSpace customCenter'} md={'6'}>
                                <img src={work.image} alt={'Ad'} style={{
                                    objectFit: 'cover',
                                    height: '26vw', aspectRatio: '1'
                                }}/>
                            </Col>
                            <Col className={'verticalCenter text-start'}>
                                <h4 className={'text-primary'}>{work.name}</h4>


                                <p className={'text-white overflow-hidden'} style={{
                                    width: '80%', maxHeight: '50%'
                                }}>{work.description}</p>

                                <LinkContainer to={'/portfolio/' + work.id}>
                                    <NavLink><span>View More <BsArrowRight/></span></NavLink>
                                </LinkContainer>


                            </Col>
                        </Row>
                    </CarouselItem>)}

                </Carousel>
            </section>
            <Container className={'text-white'}>
                <Row className={'my-4 py-1 pe-2 ps-0'}>
                    <Col md={'3'}>
                        <h4 className={'text-white text-start'}>Previous Work</h4>
                    </Col>
                    <Col md={'9'}>
                        <hr/>
                    </Col>
                </Row>

                <Row className={'gx-3 gy-3 pb-5'}>
                    {works.map((_work, index) => <Work key={index} work={_work}/>)}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio