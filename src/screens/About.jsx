import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import {images} from "../podo/TempData";
import {
    AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp
} from "react-icons/ai";
import {Link} from "react-router-dom";

const About = () => {
    return (<Container className={'py-5'}>
        <h4 className={'text-secondary'}>About Kioga</h4>
        <Row>
            <Col md={'4'}>
                <img src={images.at(20)} alt={'Company HQ'} style={{
                    width: '90%', aspectRatio: '1'
                }}/>
                <Row className={'px-5 mt-2'}>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineWhatsApp
                        size={24}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineLinkedin
                        size={24}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineFacebook
                        size={24}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineInstagram
                        size={24}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineMail size={24}/></a></Col>
                </Row>
                <Row className={'px-5 mt-3 mx-2'}>
                    <Link to={'/contact'}>
                        <Button variant={'secondary'}>Contact Us</Button>
                    </Link>

                </Row>
            </Col>
            <Col className={'text-white text-start'}>
                <h5 className={'text-secondary'}>BUILDING OF RESIDENTIAL PROPERTY</h5>
                <p>
                    Due to the fact that it is almost every person's dream to have their own home and the freedom that
                    comes with it, it is in our best interest to ensure that we help these dreamers become achievers,in
                    that regard, from start to finish.
                    The networks and relationships we have with manufacturers and suppliers of building material,
                    furnishing and home improvement equipment enables us to do high quality work at lower prices as
                    compared to if one decides to get the work done independently or through alternative contractors.
                </p>
                <h5 className={'text-secondary'}>BUILDING OF COMMERCIAL PROPERTY</h5>
                <p>
                    Real estate has proved over time that it is a very reliable and cash flow generative investment.
                    From apartments to office buildings to warehouses to shopping centers to hotels, more and more
                    people are putting their money in commercial properties.
                    We provide construction solutions to individuals, developers, corporate clients and government
                    entities in this sector.
                </p>
                <h5 className={'text-secondary'}>BUILDING OF INFRASTRUCTURE</h5>
                <p>
                    We are an experienced contractor for both the national and county governments and have been offering
                    road and railway construction services since our founding 15 years ago.
                </p>
                <p>
                    Praesent in ex lacus. Ut eu libero quis lorem tincidunt tincidunt. Ut eget orci diam. Vestibulum
                    sit amet neque vitae nibh ultrices congue at id lectus. Nulla eget metus varius, sollicitudin
                    magna id, auctor turpis. Nunc enim sapien, tempor in quam suscipit, sagittis commodo elit. In
                    vel diam et enim sollicitudin mollis eu eget metus. Praesent eu lectus maximus, mollis tortor
                    eu, commodo leo. Integer ac vehicula nisi. Etiam accumsan id libero sit amet porttitor. Aenean
                    dictum justo at dignissim porttitor. Cras sollicitudin, urna sagittis consectetur lacinia,
                    ligula leo lobortis metus, quis sollicitudin dolor dolor vitae ligula. Nunc quis elit ac nisi
                    sagittis malesuada eu sit amet nunc. Curabitur nec sagittis nulla, quis feugiat lorem.
                    Suspendisse blandit, dolor eu ullamcorper tristique, lectus ipsum vestibulum justo, vitae
                    blandit sem purus et ex. Cras at mauris quis nisl porttitor ornare et vitae nisi.
                </p>

            </Col>
        </Row></Container>)
}

export default About