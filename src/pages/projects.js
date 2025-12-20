import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ProjectsFilter from "../components/projectsFilter"
import Spacer from "../components/spacer"

export default function ProjectsPage({ data: { projects } }) {
    return (
        <Layout>
            <Spacer />
            <Spacer />
            <ProjectsFilter projects={projects.nodes} />
        </Layout>
    )
}

export const Head = () => <Seo title='Projects' />

export const query = graphql`
    query ProjectsPageQuery {
        projects: allDatoCmsProject(sort: {position: ASC}) {
            nodes {
                slug
                previewTitle
                previewDescription
                sector {
                    title
                }
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
