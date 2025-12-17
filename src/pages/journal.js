import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function InformationPage({ data: { page } }) {
    return (
        <Layout>
            
        </Layout>
    )
}

export const Head = () => <Seo title='Projects' />

export const query = graphql`
    query ProjectsPageQuery {
        page: allDatoCmsProject(sort: {position: ASC}) {
            nodes {
                slug
                previewTitle
                previewDescription
                previewMedia {
                    aspectRatio
                    assetField {
                        image {
                            gatsbyImageData
                        }
                        video
                    }
                }
            }
        }
    }
`
