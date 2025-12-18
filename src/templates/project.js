import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HeroBanner from "../components/heroBanner"
import ProjectIntro from "../components/projectIntro"
import RelatedProjects from "../components/relatedProjects"
import Content from "../components/content"
import Credits from "../components/credits"

export default function Project({ data: { project, relatedProjects } }) {
    const shuffledProjects = relatedProjects.nodes
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)

    return (
        <Layout title={project.title}>
            <HeroBanner image={project.heroAsset?.image} video={project.heroAsset?.video} />
            <div className='bg-black pos-rel z-2'>
                <ProjectIntro introduction={project.introduction} client={project.client} service={project.service} sector={project.sector} year={project.year} />
                <Content blocks={project.contentBlocks} />
                <Credits credits={project.credits} content={project.creditsContent} />
                <RelatedProjects projects={shuffledProjects} />
            </div>
        </Layout>
    )
}

export const Head = ({ data: { project } }) => <Seo title={project.title} />

export const query = graphql`
    query ProjectQuery($slug: String!) {
        project: datoCmsProject(slug: { eq: $slug }) {
            title
            slug
            introduction
            heroAsset {
                ... on DatoCmsAssetBlock {
                    image {
                        gatsbyImageData
                    }
                    video
                }
            }
            client
            service
            year
            sector {
                title
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
            }
            credits {
                ... on DatoCmsCreditBlock {
                    content
                }
            }
            creditsContent
        }
        relatedProjects: allDatoCmsProject(filter: { slug: { ne: $slug } }) {
            nodes {
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
            }
        }
    }
`
