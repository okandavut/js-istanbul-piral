const { VueLoaderPlugin } = require('vue-loader')

module.exports = function (config) {
    config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-loader'
    })
    config.plugins.push(new VueLoaderPlugin())
    return config
}