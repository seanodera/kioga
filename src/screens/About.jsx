import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {images} from "../podo/TempData";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineWhatsApp
} from "react-icons/ai";

const About = () => {
    return (<Container className={'py-5'}>
        <h4 className={'text-secondary'}>About Kioga</h4>
        <Row>
            <Col md={'4'}>
                <img src={images.at(20)} alt={'Company HQ'} style={{
                    width: '90%',
                    aspectRatio: '1'
                }}/>
                <Row className={'px-5 mt-2'}>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineWhatsApp size={24}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineLinkedin size={24}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineFacebook size={24}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineInstagram size={24}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineMail size={24}/></a></Col>
                </Row>
            </Col>
            <Col className={'text-white text-start'}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus ornare felis lobortis
                    rutrum. Vestibulum ullamcorper tortor nec lorem vulputate, et eleifend sem faucibus. Donec nec
                    libero aliquet, sodales ligula non, aliquam urna. Cras ligula neque, gravida in risus ac,
                    dapibus lobortis risus. Etiam ipsum sapien, euismod dignissim purus vel, tincidunt rutrum metus.
                    Etiam in pharetra felis, at pulvinar enim. Vivamus egestas, massa in molestie lobortis, turpis
                    augue sodales velit, eu ultricies turpis lectus sit amet risus. Proin ut lectus vitae odio
                    commodo aliquet. Ut faucibus velit quis fermentum tristique. Nam gravida, ipsum vel tincidunt
                    venenatis, odio lorem lacinia dui, id lobortis felis ante vel metus. In sollicitudin vitae ante
                    quis volutpat.
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