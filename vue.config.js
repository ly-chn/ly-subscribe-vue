const port = process.env.port || process.env.npm_config_port || 9527 // dev port
const MomentLocalsPlugin = require('moment-locales-webpack-plugin')
module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        before: require('./mock/mock-server.js')
    },
    configureWebpack: {
        plugins: [
            new MomentLocalsPlugin({
                localesToKeep: ['zh-cn']
            })
        ]
    }
}
