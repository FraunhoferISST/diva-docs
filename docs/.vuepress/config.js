const { description } = require('../../package')
const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
  title: 'DIVA guide',
  description: description,
  base: isDevMode ? "/" : "/diva-docs/",
  head: [
    ['link', { rel: 'icon', href: '/logos/diva_logo_1000_1000.png' }],
  ],
  markdown: {
    code: {
      lineNumbers: false,
    }
  },
  themeConfig: {
    repo: 'https://github.com/FraunhoferISST/diva',
    repoLabel: "GitHub",
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    logo: '/logos/diva_logo_1000_1000.png',
    navbar: [
      {
        text: 'About DIVA',
        link: '/about/',
      },
      {
        text: 'Users Guide',
        link: '/user-docs/'
      },
      {
        text: 'Development',
        link: '/dev-docs/',
      },
    ],
    sidebar: {
      '/dev-docs/': [
        {
          text: 'Development',
          collapsable: false,
          isGroup: true,
          children: [
            '/dev-docs/README.md',
            {
              text: 'Deployment',
              isGroup: true,
              children: [
                '/dev-docs/deployment/README.md',
                '/dev-docs/deployment/local.md',
                '/dev-docs/deployment/docker.md'
              ]
            },
            {
              text: 'Architecture',
              isGroup: true,
              children: [
                '/dev-docs/architecture/README.md',
                '/dev-docs/architecture/json-schemas.md',
                '/dev-docs/architecture/rest-api.md',
                // '/dev-docs/architecture/services.md',
                '/dev-docs/architecture/gateway.md',
                '/dev-docs/architecture/web-client.md',
                '/dev-docs/architecture/tooling.md',
              ]
            },
            // '/dev-docs/releases.md',
            // '/dev-docs/ci-cd.md',
          ]
        },
        /*{
          text: 'Contribution',
          collapsable: false,
          isGroup: true,
          children: [
            '/dev-docs/contribution/README.md',
            '/dev-docs/contribution/issues-and-prs.md',
            '/dev-docs/contribution/code-styles.md',
            ]
        },*/
      ],
      '/user-docs/': [
        {
          text: 'User guide',
          collapsable: false,
          isGroup: true,
          children: [
            '/user-docs/README.md',
            '/user-docs/signup.md',
            '/user-docs/home.md',
            '/user-docs/search.md',
            '/user-docs/user.md',
            // '/user-docs/dashboard.md',
            /*{
              text: 'Import and creat',
              isGroup: true,
              link: '/user-docs/create/README.md',
              children: [
                '/user-docs/create/create-resource.md',
                '/user-docs/create/create-asset.md',
              ]
            },*/
          ]
        },
      ],
    }
  },
}
