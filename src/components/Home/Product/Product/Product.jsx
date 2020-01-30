import React from "react"
import Img from "gatsby-image"
import { Col, Card, Button } from "react-bootstrap"

const Product = ({ product: { image, title, price } }) => {
  return (
    <Col xs={10} sm={8} md={6} lg={4} className="mx-auto my-3">
      <Card style={{ minHeight: "100%" }}>
        <Img fluid={image.fluid} as={Card.Img} variant="top" />
        <Card.Body className="text-center">
          <h6>{title}</h6>
          <h6>{price}</h6>
          <Button className="btn-yellow mt-3 text-capitalize" variant="light">
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product
