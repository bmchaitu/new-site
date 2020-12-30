module.exports = {
    siteMetadata: {
        description: "Personal page of Chaitanya",
        locale: "en",
        title: "Chaitu",
    },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: true,
                theme: "classic"
            }
        }
    ]
}
