import React from "react"
import Img from "gatsby-image"
import { Col, Card, Button } from "react-bootstrap"

const Product = ({
  product: {
    image: { fluid, src },
    title,
    price,
    id,
  },
}) => {
  return (
    <Col xs={10} sm={8} md={6} lg={4} className="mx-auto my-3">
      <Card style={{ minHeight: "100%" }}>
        <Img fluid={fluid} as={Card.Img} variant="top" />
        <Card.Body className="text-center">
          <h6>{title}</h6>
          <h6>{price}</h6>
          <Button
            className="btn-yellow mt-3 text-capitalize snipcart-add-item"
            variant="light"
            data-item-id={id}
            data-item-price={price}
            data-item-url="https://affectionate-khorana-562805.netlify.com/"
            data-item-name={title}
            data-item-image={src}
          >
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product
