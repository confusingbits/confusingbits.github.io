module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: "UA-90586311-1" },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     // It's important to specify the maxWidth (in pixels) of
          //     // the content container as this plugin uses this as the
          //     // base for generating different widths of each image.
          //     maxWidth: 590,
          //     // Remove the default behavior of adding a link to each
          //     // image.
          //     linkImagesToOriginal: true,
          //     // Analyze images' pixel density to make decisions about
          //     // target image size. This is what GitHub is doing when
          //     // embedding images in tickets. This is a useful setting
          //     // for documentation pages with a lot of screenshots.
          //     // It can have unintended side effects on high pixel
          //     // density artworks.
          //     //
          //     // Example: A screenshot made on a retina screen with a
          //     // resolution of 144 (e.g. Macbook) and a width of 100px,
          //     // will be rendered at 50px.
          //     //
          //     // Defaults to false.
          //     sizeByPixelDensity: false,
          //   },
          // },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
              // as we assume you'll use gatsby-remark-images to handle
              // images in markdown as it automatically creates responsive
              // versions of images.
              //
              // If you'd like to not use gatsby-remark-images and just copy your
              // original images to the public directory, set
              // `ignoreFileExtensions` to an empty array.
              ignoreFileExtensions: [],
            },
          }
        ],
      },
    },
  ],
}
