import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import {images} from "../podo/TempData";
import {
    AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp
} from "react-icons/ai";
import {Link} from "react-router-dom";

const About = () => {
    return (<Container className={'py-5'}>
        <h4 className={'text-secondary'}>About REAL CONSTRUCTION</h4>
        <Row className={'py-3'}>
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
                
                <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

</p>
                
                <p>
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then
                </p>
            


            </Col>
        </Row></Container>)
}

export default About