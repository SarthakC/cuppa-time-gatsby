import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection/BackgroundSection"
import Info from "../components/Home/Info/Info"

export const query = graphql`
  {
    img: file(absolutePath: {}, relativePath: { eq: "about-background.jpeg" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const AboutPage = ({
  data: {
    img: {
      childImageSharp: { fluid: img },
    },
  },
}) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={img}
      title="about us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

export default AboutPage
