import React, {useState} from 'react'
import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineWhatsApp
} from "react-icons/ai";

const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit() {
        console.log(firstName, secondName, email, phone, message);
    }
    return (<Container className={'text-white py-5'}>
        <h3 className={'text-white'}>Contact Us</h3>
        <p>Contact us for a quote, help or join the team</p>
        <Row>
            <Col>

                <h4 className={'text-secondary'}>General Inquiries</h4>
                <br/>
                <p>123 Haile Selassie, Nairobi</p>
                <p>12345-00100, Kenya</p>
                <br/>
                <p>+1234567890</p>
                <p>info@site.com</p>
                <br/>
                <Row className={'px-5'}>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineWhatsApp
                        size={20}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineLinkedin size={20}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineFacebook
                        size={20}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineInstagram
                        size={20}/></a></Col>
                    <Col><a href={'https://google.com'} className={'text-white'}><AiOutlineMail size={20}/></a></Col>
                </Row>
            </Col>
            <Col md={'8'}>
                <Form className={'text-start'}>
                    <FormGroup>
                        <Row>
                            <Col>
                                <FormLabel>FirstName</FormLabel>
                                <FormControl onChange={(e) => setFirstName(e.target.value)}/>

                            </Col>
                            <Col>
                                <FormLabel>SecondName</FormLabel>
                                <FormControl onChange={(e) => setSecondName(e.target.value)}/>

                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <FormLabel>Email</FormLabel>
                                <FormControl onChange={(e) => setEmail(e.target.value)}/>

                            </Col>
                            <Col>
                                <FormLabel>Phone</FormLabel>
                                <FormControl type={'tel'} onChange={(e) => setPhone(e.target.value)}/>

                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Message</FormLabel>
                        <FormControl as={'textarea'} onChange={(e) => setMessage(e.target.value)}/>
                    </FormGroup>

                    <Button className={'my-4'} variant={'secondary'} onClick={handleSubmit.bind(this)}>Send
                        Message</Button>

                </Form>
            </Col>
        </Row>
    </Container>)
}

export default Contact