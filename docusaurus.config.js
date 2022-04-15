const React =require("react")
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').Config} */

class Title extends React.Component{
  render(){
    return (
      "<div>s</div>"
    )
  }
} 

const config = {
  title: '文档',
  tagline: '工具扩展文档',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hejiale010426', // Usually your GitHub org/user name.
  projectName: 'hejiale010426', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Token文档',
        logo: {
          alt: '我的Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '教程',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog', label: <Title/>, position: 'left'},
          {
            label: 'Gitee',
            href: 'https://gitee.com/hejiale010426',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '文档',
                to: '/docs/docs/intro',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'Wosperry',
                href: 'http://wosperry.com/',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/hejiale010426',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()}<a href=''> 网站版权权限由token所有</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }),
};

module.exports = config;
