import React, { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Img from "gatsby-image"
import Title from "../../Globals/Title/Title"

const Menu = ({ items: { edges: nodes } }) => {
  const getCategories = items => {
    return ["all", ...new Set(items.map(({ node: { category } }) => category))]
  }
  const handleItems = category => {
    category === "all"
      ? setState({ ...state, coffeeItems: items })
      : setState({
          ...state,
          coffeeItems: items.filter(({ node }) => node.category === category),
        })
  }
  const [state, setState] = useState({
    coffeeItems: nodes,
    items: nodes,
    categories: getCategories(nodes),
  })

  const { items, coffeeItems, categories } = state
  return (
    <section className="menu py-5">
      <Container>
        <Title title="best of our menu" />
        <Row className="mb-5">
          <Col className="mx-auto text-center">
            {categories.map((category, index) => {
              return (
                <Button
                  key={index}
                  variant="light"
                  className="btn-yellow text-capitalize m-3"
                  onClick={() => {
                    handleItems(category)
                  }}
                >
                  {category}
                </Button>
              )
            })}
          </Col>
        </Row>
        <Row>
          {items.length > 0 ? (
            coffeeItems.map(
              ({
                node: {
                  id,
                  image: { fixed },
                  description: { description },
                  title,
                  price,
                },
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
