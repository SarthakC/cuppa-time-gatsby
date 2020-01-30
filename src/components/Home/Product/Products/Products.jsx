import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Product from "../Product/Product"
import Title from "../../../Globals/Title/Title"
import { Container, Row } from "react-bootstrap"

export const query = graphql`
  {
    products: allContentfulCoffeeProduct {
      nodes {
        id
        title
        price
        image {
          fluid(maxHeight: 426) {
            src
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={query}
      render={({ products: { nodes: products } }) => (
        <section className="py-5">
          <Container>
            <Title title="our products" />
            <Row>
              {products.map(product => {
                return <Product key={product.id} product={product} />
              })}
            </Row>
          </Container>
        </section>
      )}
    ></StaticQuery>
  )
}

export default Products
