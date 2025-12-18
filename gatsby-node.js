const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const { data } = await graphql(`
        query PagesQuery {
            projects: allDatoCmsProject {
                nodes {
                    slug
                }
            }
            journals: allDatoCmsJournal {
                nodes {
                    slug
                }
            }
        }
    `)

    data.projects.nodes
        .filter(({ slug }) => slug)
        .forEach(({ slug }) => {
            createPage({
                path: `/projects/${slug}`,
                component: path.resolve("./src/templates/project.js"),
                context: { slug },
            })
        })

    data.journals.nodes
        .filter(({ slug }) => slug)
        .forEach(({ slug }) => {
            createPage({
                path: `/journal/${slug}`,
                component: path.resolve("./src/templates/journal.js"),
                context: { slug },
            })
        })
}
