const path = require('path')
const createNwbWebpackConfig = require('create-nwb-webpack-config')

const webpackConfig = createNwbWebpackConfig()

webpackConfig.module.rules[0].options.plugins = webpackConfig.module.rules[0].options.plugins.map(
  plugin => {
    if (plugin[0] === 'import') {
      plugin[1].style = 'css'
    }
    return plugin
  }
)

module.exports = {
  webpackConfig,
  title: '@redicom/react-component',
  ignore: ['**/*.test.js', '**/test-config/*.js', '**/src/index.js'],
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
      ],
    },
    {
      name: 'Components',
      content: 'docs/components.md',
      components: 'src/**/*.js',
    },
  ],
}
