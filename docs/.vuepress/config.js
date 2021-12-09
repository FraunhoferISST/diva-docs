const { description } = require('../../package')
const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
  title: 'DIVA Guide',
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
        text: 'Deployment',
        link: '/deployment/',
      },
      {
        text: 'Development',
        link: '/development/',
      },
    ],
    sidebar: {
      '/development/': [
        '/development/README.md',
        '/development/prerequisites.md',
        {
          text: 'Development',
          collapsable: false,
          isGroup: true,
          children: [
            {
              text: 'Deployment',
              isGroup: true,
              children: [
                '/development/deployment/local.md',
                '/development/deployment/docker.md'
              ]
            },
            {
              text: 'Architecture',
              isGroup: true,
              children: [
                '/development/architecture/README.md',
                '/development/architecture/json-schemas.md',
                '/development/architecture/rest-api.md',
                // '/dev-docs/architecture/services.md',
                '/development/architecture/keycloak.md',
                '/development/architecture/gateway.md',
                '/development/architecture/web-client.md',
                '/development/architecture/tooling.md',
              ]
            },
            // '/dev-docs/releases.md',
            // '/dev-docs/ci-cd.md',
          ]
        },
        {
          text: 'Contribution',
          collapsable: false,
          isGroup: true,
          children: [
            '/development/contribution/README.md',
            '/development/contribution/issues-and-prs.md',
            '/development/contribution/commits.md',
            '/development/contribution/code-styles.md',
            ]
        },
      ],
      '/deployment/': [
        '/deployment/README.md',
        '/deployment/prerequisites.md',
        {
          text: 'Deployment',
          isGroup: true,
          children: [
            '/deployment/docker.md',
            '/deployment/configuration.md',
            /*{
              text: 'Upgrade Guide',
              children: [
                '/deployment/docker.md',
              ]
            },*/
          ]
        },
        '/deployment/releases.md',
        {
          text: "Changelog",
          link: "https://github.com/FraunhoferISST/diva/blob/main/CHANGELOG.md"
        }
      ],
      '/user-docs/': [
        {
          text: 'User Guide',
          collapsable: false,
          isGroup: true,
          children: [
            '/user-docs/README.md',
            '/user-docs/signup.md',
            '/user-docs/home.md',
            '/user-docs/search.md',
            '/user-docs/user.md',
            '/user-docs/dashboard.md',
            {
              text: 'Import and Create',
              isGroup: true,
              link: '/user-docs/create/README.md',
              children: [
                '/user-docs/create/create-resource.md',
                '/user-docs/create/create-asset.md',
              ]
            },
            {
              text: 'Metadata Details Page',
              isGroup: true,
              link: '/user-docs/details/README.md',
              children: [
                '/user-docs/details/general.md',
                '/user-docs/details/asset-data-network.md',
                '/user-docs/details/profiling-metadata.md',
              ]
            },
          ]
        },
      ],
    }
  },
}
