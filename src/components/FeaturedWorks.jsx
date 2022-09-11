import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BsArrowRight} from "react-icons/bs";
import {works} from "../podo/TempData";

const PostedWork = ({work}) => {

    return (
        <LinkContainer to={`/work/${work.id}`}>
            <Col  className={`text-start p-0`}>
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
    let tempList = []
    for (let i =0; i<5;i++){
        tempList.push(works.at(i));
    }
    return (
        <section>
            <div style={{
                backgroundImage: 'url("/assets/image5.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className={'colorTrans py-5'}>
                    <Container className={'py-3'}>
                        <Row className={'text-white'}>
                            <Col md={'3'} className='verticalCenter'>
                                <h5 className={'text-secondary'}>
                                    Featured Works
                                </h5>
                            </Col>
                            <Col md={'5'} className={'text-start'}>
                                <p>
                                    We dont only sell products or part we are also a well-known contractor in the region
                                </p>
                            </Col>
                            <Col md={'4'} className={'verticalCenter ps-3'}>
                                <LinkContainer to={'/portfolio'}>
                                    <span>More Works <BsArrowRight/></span>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container fluid>
                    <Row className={''} style={{
                        backgroundColor: 'rgba(255,23,68,0.9)'
                    }}>
                        {tempList.map((work, index) => <PostedWork key={index} work={work}/>)}
                    </Row>
                </Container>
            </div>

        </section>
    )
}

export default FeaturedWorks

