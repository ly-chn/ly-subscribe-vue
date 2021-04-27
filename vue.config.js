const port = process.env.port || process.env.npm_config_port || 9527 // dev port

module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    devServer            : {
        port   : port,
        open   : true,
        overlay: {
            warnings: false,
            errors  : true
        },
        before : require('./mock/mock-server.js')
    }
}
