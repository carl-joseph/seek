import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Spacer from "../components/spacer"
import JournalsFilter from "../components/journalsFilter"

export default function JournalPage({ data: { journals } }) {
    return (
        <Layout whiteBg>
            <Spacer />
            <Spacer />
            <JournalsFilter journals={journals.nodes} />
            <Spacer />
            <Spacer />
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
                date
                category {
                    title
                }
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
