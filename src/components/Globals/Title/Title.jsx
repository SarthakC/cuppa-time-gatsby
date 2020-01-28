import React from "react"
import { Row, Col } from "react-bootstrap"

const Title = ({ title }) => {
  return (
    <Row>
      <Col className="text-center mb-3">
        <h1 className="display-4 text-capitalize font-weight-bold">{title}</h1>
      </Col>
    </Row>
  )
}

export default Title
