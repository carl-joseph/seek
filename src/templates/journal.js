import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ContentBlocks from "../components/content"
import JournalHero from "../components/journalHero"
import Spacer from "../components/spacer"

export default function Journal({ data: { journal } }) {
    return (
        <Layout>
            <Spacer />
            <Spacer />
            <JournalHero title={journal.title} asset={journal.heroAsset} />
            <ContentBlocks blocks={journal.contentBlocks} />
        </Layout>
    )
}

export const Head = ({ data: { journal } }) => <Seo title={journal.title} />

export const query = graphql`
    query JournalQuery($slug: String!) {
        journal: datoCmsJournal(slug: { eq: $slug }) {
            title
            slug
            heroAsset {
                ... on DatoCmsAssetBlock {
                    image {
                        gatsbyImageData
                    }
                    video
                }
            }
            contentBlocks {
                ... on DatoCmsFullWidthAssetBlock {
                    __typename
                    asset {
                        ... on DatoCmsAssetBlock {
                            image {
                                gatsbyImageData
                            }
                            video
                        }
                    }
                }
                ... on DatoCmsTextAndImageBlock {
                    __typename
                    content
                    caption
                    reverse
                    asset {
                        ... on DatoCmsAssetBlock {
                            image {
                                gatsbyImageData
                            }
                            video
                        }
                    }
                }
                ... on DatoCmsContentBlock {
                    __typename
                    content
                }
                ... on DatoCmsTwoImagesBlock {
                    __typename
                    imageOne {
                        ... on DatoCmsMediaBlock {
                            aspectRatio
                            assetField {
                                ... on DatoCmsAssetBlock {
                                    image {
                                        gatsbyImageData
                                    }
                                    video
                                }
                            }
                        }
                    }
                    imageTwo {
                        ... on DatoCmsMediaBlock {
                            aspectRatio
                            assetField {
                                ... on DatoCmsAssetBlock {
                                    image {
                                        gatsbyImageData
                                    }
                                    video
                                }
                            }
                        }
                    }
                }
                ... on DatoCmsTitleContentBlock {
                    __typename
                    title
                    content
                }
                ... on DatoCmsContentImageBlock {
                    __typename
                    title
                    content
                    asset {
                        ... on DatoCmsAssetBlock {
                            image {
                                gatsbyImageData
                            }
                            video
                        }
                    }
                }
            }
        }
    }
`
