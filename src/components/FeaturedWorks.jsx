import React, {useState} from 'react'
import {Col, Container, NavbarBrand, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BsArrowRight} from "react-icons/bs";

const PostedWork = ({work}) => {
    let dirty = '';
    if (work.id === 0) {dirty = 'fixPad'} else {dirty = 'p-0'};
    return (
        <LinkContainer to={`/work/${work.id}`}>
            <Col  className={`text-start ${dirty}`}>
                <img src={work.image} alt={work.name} className={'mb-2'} style={{
                    aspectRatio: '0.8',
                    width: '100%',
                    objectFit: 'cover'
                }}/>
               <div className={'ms-1'}>
                   <h5>{work.name}</h5>
                   <p>{work.type}</p>
               </div>
            </Col>
        </LinkContainer>

    )
}
const FeaturedWorks = () => {
    let works = [
        {
            image: '/assets/image1.jpg',
            name: 'Tunnel Somewhere',
            id: 0, type: 'road'
        },
        {
            image: '/assets/image2.jpg',
            name: 'Road Upgrade',
            id: 1, type: 'repair'
        },
        {
            image: '/assets/image3.jpg',
            name: 'Apartment Complex',
            id: 2, type: 'residentual buildings'
        },
        {
            image: '/assets/image5.jpg',
            name: 'Port Of Somewhere',
            id: 4, type: 'Heavy Equipment Installation'
        },
        {
            image: '/assets/image6.jpg',
            name: 'Power Lines',
            id: 5, type: 'remote location'
        }
    ]
    return (
        <section>
            <div style={{
                backgroundImage: 'url("/assets/image5.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className={'colorTrans py-3'}>
                    <Container>
                        <Row className={'text-white'}>
                            <Col md={'3'}>
                                <NavbarBrand className={'colorTheme'} style={{
                                    color: '#FF1744'
                                }}>
                                    Featured Works
                                </NavbarBrand>
                            </Col>
                            <Col md={'6'}>
                                <p>
                                    We dont only sell products or part we are also a well-known contractor in the region
                                </p>
                            </Col>
                            <Col md={'3'}>
                                <LinkContainer to={'/works'}>
                                    <span>More Works <BsArrowRight/></span>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Row className={''} style={{
                        backgroundColor: 'rgba(255,23,68,0.9)'
                    }}>
                        {works.map((work, index) => <PostedWork key={index} work={work}/>)}
                    </Row>
                </div>
            </div>

        </section>
    )
}

export default FeaturedWorks

