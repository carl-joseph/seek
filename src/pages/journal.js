import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Spacer from "../components/spacer"
import Journals from "../components/journals"

export default function JournalPage({ data: { journals } }) {
    return (
        <Layout>
            <Spacer />
            <Spacer />
            <Journals journals={journals.nodes} />
        </Layout>
    )
}

export const Head = () => <Seo title='Journal' />

export const query = graphql`
    query JournalPageQuery {
        journals: allDatoCmsJournal(sort: {position: ASC}) {
            nodes {
                slug
                previewTitle
                assetContent {
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
