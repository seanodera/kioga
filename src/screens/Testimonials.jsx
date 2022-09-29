import React from 'react'
import { Carousel, CarouselItem, Col, Row } from 'react-bootstrap'
import { testimonials } from '../podo/TempData'

const Testimonials = () => {

  return (
    <section>
      <div style={{
                backgroundImage: 'url("/assets/image5.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
              <div className='colorTrans py-5'>
                <h4 className='text-secondary'>Testimonials</h4>
                <Carousel className='mt-3'>
                  {testimonials.map((testimonial, index) => <CarouselItem key={index}  >
                    <div className='mb-5 fillSpace customCenter'>    <div className='' style={{
                    maxWidth: '40vw',
                    minWidth: '400px',
              
                  }}>
                      <p className='text-white'>{testimonial.message}</p>
                  <Row >
                    <Col className='text-end pe-1'>
                    <img src={testimonial.image} alt={index} style={{
                      borderRadius: '100%',
                      aspectRatio: '1',
                      height: '70px',
                    }}/>

                    </Col>
                    <Col className='verticalCenter text-start'>
                    <h6 className='text-white'>{testimonial.name}</h6>
                    <p className='text-secondary'>{testimonial.position}</p>
                    </Col>
                  </Row>
                    </div></div>

                  </CarouselItem>)}
                </Carousel>
              </div>
      </div>
    </section>
  )
}

export default Testimonials