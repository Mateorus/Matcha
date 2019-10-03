const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  }
}
