import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ContentBlocks from "../components/content"
import JournalHero from "../components/journalHero"
import RelatedJournals from "../components/relatedJournals"
import Spacer from "../components/spacer"

export default function Journal({ data: { journal, relatedJournals } }) {
    const shuffled = relatedJournals.nodes.sort(() => Math.random() - 0.5).slice(0, 2)

    return (
        <Layout whiteBg showCta>
            <Spacer />
            <Spacer className='m-hide' />
            <JournalHero title={journal.title} category={journal.category?.title} asset={journal.heroAsset} />
            <ContentBlocks blocks={journal.contentBlocks} />
            <RelatedJournals journals={shuffled} />
        </Layout>
    )
}

export const Head = ({ data: { journal } }) => <Seo title={journal.title} />

export const query = graphql`
    query JournalQuery($slug: String!) {
        journal: datoCmsJournal(slug: { eq: $slug }) {
            title
            slug
            category {
                title
            }
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
                ... on DatoCmsSpacer {
                    __typename
                }
                ... on DatoCmsContentImageBlock {
                    __typename
                    title
                    content
                    asset {
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
            }
        }
        relatedJournals: allDatoCmsJournal(filter: { slug: { ne: $slug } }) {
            nodes {
                previewTitle
                slug
                date
                category {
                    title
                }
                assetContent {
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
        }
    }
`
