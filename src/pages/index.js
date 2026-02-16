import React, { useState } from "react"

import { graphql } from "gatsby"
import Spacer from "../components/spacer"
import TitleSection from "../components/titleSection"
import FeaturedProject from "../components/featuredProject"
import HeroBanner from "../components/heroBanner"
import Preloader from "../components/preloader"
import Projects from "../components/projects"
import Journal from "../components/journal"
import Layout from "../components/layout"
import Seo from "../components/seo"


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
                <Spacer className='m-hide' />
                <Journal journals={page.journals} />
                <Spacer className='m-hide' />
                <FeaturedProject {...page.featuredProjectTwo} />
                <Spacer />
                <Spacer />
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
        }
    }
`
