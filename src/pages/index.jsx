import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection/BackgroundSection"
import Menu from "../components/Home/Menu/Menu"
import Products from "../components/Home/Product/Products/Products"
import Contact from "../components/Home/Contact/Contact"

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({
  data: {
    img: {
      childImageSharp: { fluid: img },
    },
    menu,
  },
}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={img} title="cuppa time" />
    <Menu items={menu} />
    <Products />
    <Contact />
  </Layout>
)

export default IndexPage
