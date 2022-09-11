import React from "react";
import {Col, Container, Row} from "react-bootstrap";


const SectionTypeA = ({image, backgroundImage, title, text}) => {

    return (<Row>
        <Col md={'6'} className={'p-0'}>
            <img src={image} alt={title} style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '2'
            }}/>
        </Col>
        <Col md={'6'} className={'p-0'} style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
        }}>
            <div className={'colorTrans fillSpace px-5 py-5 verticalCenter'}>
                <div className={'text-start'} style={{
                    width: '80%'
                }}>
                    <h4 className={'text-secondary'}>{title}</h4>
                    <br/>
                    <p className={'text-white'}>{text}</p>
                </div>
            </div>
        </Col>
    </Row>)
}
const SectionTypeB = ({image, backgroundImage, title, text}) => {

    return (<Row>
        <Col md={'6'} className={'p-0'} style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
        }}>
            <div className={'colorThemeTrans fillSpace px-5 py-5 verticalCenter'}>
                <div className={'text-start'} style={{
                    width: '80%'
                }}>
                    <h4 className={'text-primary'}>{title}</h4>
                    <br/>
                    <p className={'text-white'}>{text}</p>
                </div>
            </div>
        </Col>
        <Col md={'6'} className={'p-0'}>
            <img src={image} alt={title} style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '2'
            }}/>
        </Col>

    </Row>)
}

const MarketSection = () => {

    return (<Container fluid >
        <Row className={'my-4 py-3 px-2'}>
            <Col md={'3'}>
                <h4 className={'text-white'}>Market Sectors</h4>
            </Col>
            <Col md={'9'}>
                <hr/>
            </Col>
        </Row>
        <SectionTypeA image={'/assets/const1.jpg'} backgroundImage={'/assets/const2.jpg'}
                      title={'Construction & Engineering'}
                      text={'We provides a comprehensive range of products and\n' +
                          'techniques to create value for the construction industry and\n' +
                          'support sustainable development.'}/>
        <SectionTypeB image={'/assets/rail1.jpg'} backgroundImage={'/assets/rail2.jpg'} title={'Railway'}
                      text={'We provides a wide range of high performance rail products and\n' +
                          'railway infrastructure services to the international rail industry.'}/>
        <SectionTypeA image={'/assets/wind1.jpg'} backgroundImage={'/assets/wind2.jpg'} title={'Power & Energy'}
                      text={'High quality material produced by Real Factory backed by\n' +
                          'support of our expert consultants to fulfill a whole range of\n' +
                          'applications in the enegy market.'}/>
        <SectionTypeB image={'/assets/aero1.jpg'} backgroundImage={'/assets/aero2.jpg'} title={'Aero Space'} text={'We are a leading Aerospace steels manufacturer. Our special grade\n' +
            'steels are being used in commercial and military aerospace projects\n' +
            'around the world.'}/>

    </Container>)
}

export default MarketSection;