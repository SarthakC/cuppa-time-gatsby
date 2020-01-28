import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection/BackgroundSection"
import Info from "../components/Home/Info/Info"

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
  }
`

const IndexPage = ({
  data: {
    img: {
      childImageSharp: { fluid: img },
    },
  },
}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={img} title="cuppa time" />
    <Info />
  </Layout>
)

export default IndexPage
