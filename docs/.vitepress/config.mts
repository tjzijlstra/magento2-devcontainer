import { defineConfig } from 'vitepress'

const description = 'A production-like Docker development environment for Magento 2'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magento 2 Devcontainer",
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#027ebb' }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { name: 'twitter:description', content: description }],
    ['link', { rel: 'me', href: 'https://twitter.com/graycoreio' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'What is a Devcontainer?', link: '/what-is-devcontainer' },
          { text: 'Getting Started', link: '/getting-started',
            items: [
              { text: 'From Scratch', link: '/getting-started/from-scratch' },
              { text: 'Existing Project', link: '/getting-started/existing-project' },
              { text: 'Codespaces', link: '/getting-started/codespaces' }
            ]
          }
        ]
      },
      {
        text: 'Services',
        items: [
          { text: 'Overview', link: '/services/' },
          { text: 'Database (MySQL / MariaDB)', link: '/services/database' },
          { text: 'Nginx', link: '/services/nginx' },
          { text: 'OpenSearch', link: '/services/opensearch' },
          { text: 'PHP', link: '/services/php' },
          { text: 'RabbitMQ', link: '/services/rabbitmq' },
          { text: 'Cache (Redis / Valkey)', link: '/services/cache' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Claude Code', link: '/features/claude-code' },
          { text: 'GitHub CLI', link: '/features/github-cli' },
          { text: 'n98-magerun2', link: '/features/n98-magerun2' },
          { text: 'Speedscope', link: '/features/speedscope' },
          { text: 'VS Code Extensions', link: '/features/vscode-extensions' },
          { text: 'Xdebug', link: '/features/xdebug' }
        ]
      },
      {
        text: 'Customization',
        items: [
          { text: 'Docker Compose', link: '/customization/docker-compose' },
          { text: 'TLS Setup', link: '/customization/tls' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/graycoreio/magento2-devcontainer' },
      { icon: 'discord', link: 'https://chat.mappia.io' },
      { icon: 'twitter', link: 'https://twitter.com/graycoreio' }
    ],

    footer: {
      copyright: 'Copyright © 2022-present Graycore, LLC'
    }
  }
})
