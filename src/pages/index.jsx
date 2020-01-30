import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection/BackgroundSection"
import Info from "../components/Home/Info/Info"
import Menu from "../components/Home/Menu/Menu"
import Products from "../components/Home/Product/Products/Products"

export const query = graphql`
  {
    img: file(
      absolutePath: {}
      relativePath: { eq: "default-background.jpeg" }
    ) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    menu: allContentfulCoffeeItem {
      nodes {
        id
        description {
          description
        }
        title
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
    <Info />
    <Menu items={menu} />
    <Products />
  </Layout>
)

export default IndexPage
