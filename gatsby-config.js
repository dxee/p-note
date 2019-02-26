const path = require(`path`)
let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

/**
 * Access environmental variables
 */
require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `P-NOTE`,
    description: `A MDX notebook template.`,
    author: `bing.fxx@gmail.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/components/SiteLayout.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [`gatsby-remark-autolink-headers`],
            },
          }
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        modifyVars: {
          // DEFAULTS FOR ANT DESIGN
          // Full list of variables can be found here:
          // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
          // @primary-color: #1890ff;
          'layout-header-background': '#0E2339',
          // primary color for all components
          'primary-color': '#1890ff',
          // @link-color: #1890ff;
          'link-color': '#1890ff',
          // @success-color: #52c41a;
          'success-color': '#52c41a',
          // @warning-color: #faad14;
          'warning-color': '#faad14',
          // @error-color: #f5222d;
          'error-color': '#f5222d',
          // @font-size-base: 14px;
          // major text font size
          'font-size-base': '16px',
          // @heading-color: rgba(0, 0, 0, .85);
          'heading-color': 'rgba(0, 0, 0, .85)',
          // @text-color: rgba(0, 0, 0, .65);
          'text-color': 'rgba(0, 0, 0, .65)',
          // @text-color-secondary : rgba(0, 0, 0, .45);
          'text-color-secondary': 'rgba(0, 0, 0, .45)',
          // @disabled-color : rgba(0, 0, 0, .25);
          'disabled-color': 'rgba(0, 0, 0, .25)',
          // @border-radius-base: 4px;
          'border-radius-base': '4px',
          // @border-color-base: #d9d9d9;
          'border-color-base': '#d9d9d9',
          // @box-shadow-base: 0 2px 8px rgba(0, 0, 0, .15);
          'box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `p-note`,
        short_name: `note`,
        start_url: `/`,
        background_color: `#0E2339`,
        theme_color: `#0E2339`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
