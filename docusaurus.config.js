// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ASIALAKAY.NET // Dev',
  tagline: 'Dev Documentation, Reference, & Tutorials',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/asialakay-docs-logo.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'asiakay', // Usually your GitHub org/user name.
  projectName: 'asialakay-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: undefined,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        docs: {

        },  
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
          `https://github.com/asiakay/asialakay-docs/edit/main/${blogDirPath}/${blogPath}`,
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          

        },
       
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ASIALAKAY.NET // Dev',
        logo: {
          alt: 'asialakay docs logo',
          src: 'img/asialakay-docs-logo.svg',
        },
/*         algolia: {
        // The application ID provided by Algolia
          appId:'',
        // Public API key: it is safe to commit it
          apiKey: 'YOUR_SEARCH_API_KEY',
          indexName: '',
        }, */
        items: [
          // below was removed/commented out to allow blog to serve as landing page
/*           {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          }, */
          /* {to: '/docs', label: "Docs", position: 'left' }, */
          {to: '/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/asiakay/asialakay-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.asialakay.net',
            label: 'Asialakay.net',
            position: 'right',

          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /* {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          }, */
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Asialakay.net',
                href: 'https://www.asialakay.net',
              },
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Asialakay.net // Dev - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;