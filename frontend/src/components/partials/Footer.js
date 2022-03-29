import React from 'react'
import { Container, Row } from 'reactstrap'

const Footer = () => {
  return (
   <Container className="footer bottom bg-light bg-gradient rounded-top border-top border-5" fluid>
    <Container className="mt-1 text-center">
      <Row>        
        <div className="mx-auto pt-3">
          <p className="mb-0 font-weight-bold text-dark">&copy; 2022 MARUF AHMED</p>
          <hr className="my-0 bg-secondary"/>
          <p className="mb-0">Email: mriduava@gmail.com</p>
          <p>GitHub: <span className="text-info"><a href="https://github.com/mriduava/mridu-auction" target="_blank" rel="noopener noreferrer">github.com/mriduava/mridu-auction</a></span></p>
        </div>
      </Row>      
    </Container>
    </Container>
  )
}

export default Footer
