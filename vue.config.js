const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')

const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

const addStylusResource = rule => {
  rule
    .use('style-resouce')
    .loader('style-resources-loader')
    .options({
      patterns: [resolve('src/assets/styles/variables.styl')]
    })
}

module.exports = {
  chainWebpack(config) {
    config.plugin('monaco').use(new MonacoEditorWebpackPlugin())
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStylusResource(config.module.rule('stylus').oneOf(type))
    )
  }
}
