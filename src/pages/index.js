import React, { useState } from "react"

import { graphql } from "gatsby"
import FeaturedProject from "../components/featuredProject"
import HeroBanner from "../components/heroBanner"
import Journal from "../components/journal"
import Layout from "../components/layout"
import MixedWork from "../components/mixedWork"
import Preloader from "../components/preloader"
import Projects from "../components/projects"
import Seo from "../components/seo"
import Spacer from "../components/spacer"
import TitleSection from "../components/titleSection"

export default function IndexPage({ data: { page } }) {
    const [isPreloading, setIsPreloading] = useState(true)

    return (
        <Layout isPreloading={isPreloading}>
            {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}
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
            journals {
                slug
                previewTitle
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
            featuredProjectOne {
                title
                caption
                buttonText
                projectLink {
                    slug
                }
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
                projectLink {
                    slug
                }
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
