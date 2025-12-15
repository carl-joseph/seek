import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HeroBanner from "../components/heroBanner"
import Projects from "../components/projects"
import FeaturedProject from "../components/featuredProject"
import Journal from "../components/journal"
import MixedWork from "../components/mixedWork"
import TitleSection from "../components/titleSection"
import Spacer from "../components/spacer"

export default function IndexPage({ data: { page } }) {
    return (
        <Layout>
            <HeroBanner image={page.heroImage} video={page.heroVideo} />
            <div className='bg-black pos-rel z-2'>
                <TitleSection title={page.title} />
                <Projects projects={page.projects} />
                <FeaturedProject {...page.featuredProjectOne} />
                <Journal journals={page.journals} />
                <FeaturedProject {...page.featuredProjectTwo} />
                <Spacer />
                <Spacer />
                <MixedWork title={page.mixedTitle} work={page.mixedWork} />
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title='Home' />

export const query = graphql`
    query HomepageQuery {
        page: datoCmsHomepage {
            title
            heroVideo
            heroImage {
                gatsbyImageData
            }
            projects {
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
            journals {
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
            featuredProjectOne {
                title
                caption
                buttonText
                buttonLink
                assetField {
                    image {
                        gatsbyImageData
                    }
                    video
                }
            }
            featuredProjectTwo {
                title
                caption
                buttonText
                buttonLink
                assetField {
                    image {
                        gatsbyImageData
                    }
                    video
                }
            }
            mixedTitle
            mixedWork {
                title
                link
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
