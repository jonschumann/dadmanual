// @ts-check
// DADman User Manual — Docusaurus configuration
// Target: docs.digitalaudio.dk (current: docs.evangelaudio.com)

const { themes: prismThemes } = require('prism-react-renderer');

// Build metadata injected by CI — fall back to sensible defaults locally
const DOC_VERSION   = process.env.DOC_VERSION   || require('./package.json').version;
const DOC_BUILD_DATE = process.env.DOC_BUILD_DATE || new Date().toISOString().split('T')[0];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DADman User Manual',
  tagline: 'Complete reference for DADman control software v5.8.2',
  favicon: 'img/favicon.ico',

  // Build metadata available to all pages and the PDF generator
  customFields: {
    docVersion:   DOC_VERSION,
    docBuildDate: DOC_BUILD_DATE,
  },

  // Production URL
  url: 'https://docs.evangelaudio.com',
  baseUrl: '/',  // change to '/dadman/' before deploying to production

  // GitHub Pages deployment config (for CI)
  organizationName: 'digitalaudio',
  projectName: 'dadman-user-manual',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'ja', 'es', 'ko', 'da'],
    localeConfigs: {
      en: { label: 'English',                    direction: 'ltr', htmlLang: 'en-GB' },
      de: { label: 'Deutsch',                    direction: 'ltr', htmlLang: 'de'    },
      fr: { label: 'Français',                   direction: 'ltr', htmlLang: 'fr'    },
      ja: { label: '日本語',                      direction: 'ltr', htmlLang: 'ja'    },
      es: { label: 'Español (Latinoamérica)',     direction: 'ltr', htmlLang: 'es-419'},
      ko: { label: '한국어',                       direction: 'ltr', htmlLang: 'ko'    },
      da: { label: 'Dansk',                       direction: 'ltr', htmlLang: 'da'    },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/digitalaudio/dadman-user-manual/tree/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // DAD brand colours
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'DADman User Manual',
        logo: {
          alt: 'Digital Audio Denmark',
          src: 'img/dad-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'manualSidebar',
            position: 'left',
            label: 'DADman Manual',
          },
          {
            type: 'docSidebar',
            sidebarId: 'hardwareSidebar',
            position: 'left',
            label: 'Hardware Manuals',
          },
          {
            to: '/downloads',
            label: 'Download PDF',
            position: 'right',
          },
          {
            href: 'https://www.digitalaudiosupport.com',
            label: 'Support Portal',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/digitalaudio/dadman-user-manual',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Manual',
            items: [
              { label: 'Getting Started', to: 'getting-started' },
              { label: 'Operation', to: 'operation' },
              { label: 'Advanced Features', to: 'advanced-features' },
              { label: 'Troubleshooting', to: 'troubleshooting' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'DAD Support Portal', href: 'https://www.digitalaudiosupport.com' },
              { label: 'Software Downloads', href: 'https://www.digitalaudiosupport.com/login' },
              { label: 'Community Forum', href: 'https://www.digitalaudiosupport.com/forums' },
            ],
          },
          {
            title: 'DAD',
            items: [
              { label: 'digitalaudio.dk', href: 'https://www.digitalaudio.dk' },
              { label: 'Contact', href: 'mailto:support@ntp.dk' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NTP Technology A/S. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'applescript'],
      },
      // Table of contents — show up to h3
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

module.exports = config;
