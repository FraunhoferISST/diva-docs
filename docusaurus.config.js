// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DIVA Guide',
  tagline: 'DIVA - Data Inventory and Valuation Approach',
  url: 'https://fraunhoferisst.github.io/',
  baseUrl: '/diva-docs/',
  staticDirectories: ['public', 'static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/diva_logo.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fraunhofer ISST', // Usually your GitHub org/user name.
  projectName: 'DIVA', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DIVA Guide',
        logo: {
          alt: 'DIVA Logo',
          src: 'img/logos/diva_logo_1000_1000.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            to: 'about',
            label: 'About',
            position: 'left',
            activeBaseRegex: `/about`,
          },
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/FraunhoferISST/diva',
            label: 'GitHub',
            position: 'right',
            title: 'View on GitHub',
            className: 'icon',
          },
        ],
      },
      footer: {
        copyright: `Made by <a target="_blank" rel="noopener noreferrer" href="https://www.isst.fraunhofer.de/en.html">Fraunhofer ISST</a> with ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'supportus',
        content: '⭐️ If you like DIVA, give it a star on ' +
          '<a target="_blank" rel="noopener noreferrer" href="https://github.com/FraunhoferISST/diva">GitHub</a> ⭐️',
      },
    }),
};

module.exports = config;
