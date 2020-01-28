import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import Title from "../../Globals/Title/Title"

const Menu = ({ items: { nodes } }) => {
  const [state, setState] = useState({
    coffeeItems: nodes,
    items: nodes,
  })
  const { items, coffeeItems } = state

  return (
    <section className="menu py-5">
      <Container>
        <Title title="best of our menu" />
        <Row>
          {items.length > 0 ? (
            coffeeItems.map(
              ({
                id,
                image: { fixed },
                description: { description },
                title,
                price,
              }) => {
                return (
                  <Col key={id} md={6} className="my-3 d-flex mx-auto">
                    <div>
                      <Img fixed={fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0 text-capitalize">
                          <small>{title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{description}</small>
                      </p>
                    </div>
                  </Col>
                )
              }
            )
          ) : (
            <Col md={10} sm={6} className="mx-auto text-center text-center">
              <h1>there are no items to display</h1>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Menu
