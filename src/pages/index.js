import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HeroBanner from "../components/heroBanner"

export default function IndexPage({data}) {
  var page = data.page;
  return (
    <Layout>
      <HeroBanner image={page.heroImage} video={page.heroVideo} />
    </Layout>
  )
}

export const Head = () => <Seo title='Home' />

export const query = graphql`
  query HomepageQuery {
    page:datoCmsHomepage {
      heroVideo
      heroImage {
        gatsbyImageData
      }
    }
  }
`