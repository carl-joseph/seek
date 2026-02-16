import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Spacer from "../components/spacer"
import { InformationServices } from "../components/informationServices"
import { InformationContact } from "../components/informationContact"
import { InformationTeam } from "../components/informationTeam"
import { InformationCollaborators } from "../components/informationCollaborators"

export default function InformationPage({ data: { page } }) {
    return (
        <Layout>
            <Spacer />
            <Spacer />
            <h1 className='h1 p10 fade--in' data-sal>
                {page.title}
            </h1>
            <Spacer />
            <Spacer />
            <div className='p10 grid-2 gap-10'>
                <InformationServices services={page.services} />
                <Spacer className='m-show' />
                <InformationContact email={page.email} phone={page.phone} instagram={page.instagram} linkedin={page.linkedin} address={page.address} image={page.image} />
            </div>
            <Spacer />
            <div className='p10 grid-2 gap-10'>
                <InformationTeam team={page.team} />
                <Spacer className='m-show' />
                <InformationCollaborators collaborators={page.collaborators} />
            </div>
            <Spacer />
        </Layout>
    )
}

export const Head = () => <Seo title='Information' />

export const query = graphql`
    query InformationPageQuery {
        page: datoCmsInformation {
            title
            services {
                title
                list {
                    title
                }
            }
            team {
                title
                role
            }
            collaborators {
                title
            }
            email
            phone
            instagram
            linkedin
            address
            image {
                gatsbyImageData
            }
        }
    }
`
