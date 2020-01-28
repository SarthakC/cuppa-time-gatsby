import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <Container>
        <Row>
          <Col
            lg={10}
            md={6}
            className="text-yellow text-center text-capitalize mx-auto"
          >
            <h3>
              all rights reserved &copy;{new Date().getFullYear().toString()}
            </h3>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
