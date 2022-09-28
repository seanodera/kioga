import React from 'react'
import {Button, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {works} from "../podo/SiteData";
import {useParams} from "react-router";
import {LinkContainer} from "react-router-bootstrap";


const SingleWork = () => {
  let {id} = useParams()

  let work = works.find(o => o.id === Number(id));
  return (
    <Container className={'pb-5'}>
      <Row className={'my-4 py-1 pe-2 ps-0'}>
        <Col md={'3'} >
          <h4 className={'text-white text-start'}>{work.name}</h4>
        </Col>
        <Col md={'9'} >
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col md={'6'}>
          <img src={work.image} alt={'pictures '} className={''} style={{
              width: '100%', aspectRatio: '1', objectFit: 'cover',
          }}/>
        </Col>
        <Col>
            <ListGroup variant={'flush'} className={'text-start'}>
                <ListGroupItem>
                    A more descriptive title
                </ListGroupItem>
                <ListGroupItem>
                    Description:
                </ListGroupItem>
                <ListGroupItem>
                    {work.description}
                </ListGroupItem>

            </ListGroup>
        </Col>
          <Col md={'3'}>
              <ListGroup variant={'flush'}>
                  <ListGroupItem>
                      <Row>
                          <Col>
                              Client:
                          </Col>
                          <Col>
                              <strong>Client Name</strong>
                          </Col>
                      </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                      <Row>
                          <Col>
                              Date:
                          </Col>
                          <Col>
                             <strong> 09-10-2022</strong>
                          </Col>
                      </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                      <Row>
                          <Col>
                              Value:
                          </Col>
                          <Col>
                            <strong> $3.0M</strong>
                          </Col>
                      </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                      <LinkContainer to={'/contact'}>
                          <Button variant={'secondary'}>
                              Get Quote
                          </Button>
                      </LinkContainer>
                  </ListGroupItem>
              </ListGroup>
          </Col>
      </Row>
    </Container>
  )
}

export default SingleWork