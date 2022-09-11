import React from 'react'
import {Button} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
const ErrorPage = () => {
  return (
    <div className={'py-3 fillSpace'} style={{
        backgroundColor: '#f3f3f0'
    }}>
      <div style={{
          width: '100%'
      }}><img src={'/assets/error.jpg'} style={{
          width:'80%',
          height: '20%',
          objectFit: 'cover'
      }}/></div>
        <LinkContainer to={'/'} className={'mb-2'}>
            <Button > Home </Button>
        </LinkContainer>
        <br/>
        <p>
            Dont know how you got here but this page doesnt exist yet
        </p>
        <br/>
    </div>
  )
}

export default ErrorPage