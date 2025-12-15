import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Spacer from "../components/spacer"

export default function ProjectsPage({ data: { projects } }) {
    return (
        <Layout>
            <Spacer />
            <Spacer />
            <Projects projects={projects.nodes} alt />
        </Layout>
    )
}

export const Head = () => <Seo title='Projects' />

export const query = graphql`
    query ProjectsPageQuery {
        projects: allDatoCmsProject {
            nodes {
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
