const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const { data } = await graphql(`
        query ProjectsQuery {
            projects: allDatoCmsProject {
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
}
