import React from "react";
import {Card, CardImg, Col} from "react-bootstrap";
import {colors} from "../podo/TempData";
import {LinkContainer} from "react-router-bootstrap";
import {BsArrowRight} from "react-icons/bs";

const Work = ({work}) => {
  return (<Col md={'3'}>
    <LinkContainer to={'/portfolio/' + work.id} style={{
      backgroundColor: colors.at(2),height: '100%'
    }}>
      <Card className={'rounded-2 overflow-hidden pb-2 border-0'} style={{
        backgroundColor: colors.at(2),
      }} >
        <CardImg variant={'top'} src={work.image} style={{
          objectFit: 'cover',
          aspectRatio: '1',
        }}/>
        <Card.Body className={'text-start'}>
          <span><Card.Title className={''}>{work.name}</Card.Title></span>
          <Card.Text className={'overflow-hidden limitLines'} >{work.description}</Card.Text>
          <span >View More <BsArrowRight/></span>
        </Card.Body>

      </Card>
    </LinkContainer>
  </Col>);
}

export default Work;