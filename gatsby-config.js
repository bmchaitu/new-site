module.exports = {
    siteMetadata: {
        description: "Personal page of Chaitanya",
        locale: "en",
        title: "Chaitu",
    },
    plugins: [
        {
            resolve: "@bmchaitu/site-theme",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: true,
                theme: "classic"
            }
        }
    ]
}
