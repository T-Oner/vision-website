const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Vision',
    tagline: 'homepage.subtitle',
    url: 'https://getvisionapp.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'vision', // Usually your GitHub org/user name.
    projectName: 'vision-site', // Usually your repo name.

    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh'],
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
        },
        zh: {
          label: '简体中文',
          direction: 'ltr',
        },
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // editUrl:
            //   'https://github.com/facebook/docusaurus/edit/main/website/',
          },
          blog: {
            showReadingTime: false,
            // Please change this to your repo.
            // editUrl:
            // 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} Kai Shao.`,
            },
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
          title: 'Vision',
          logo: {
            alt: 'Vision Logo',
            src: 'img/vision_logo_dark 1.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Tutorial',
            },
            { to: '/blog', label: 'Blog', position: 'left' },
            { to: '/about', label: 'About', position: 'left' },
            {
              type: 'localeDropdown',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Tutorial',
                  to: '/docs/intro',
                },
                {
                  label: 'Blog',
                  to: '/blog',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/boilingKai',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/grepug/vision-website',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Vision team. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingID: 'G-3BPBRCEWL8',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }),
  }
);
