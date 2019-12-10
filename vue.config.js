// vue.config.js
module.exports = {
    // options...
    devServer: {
        useLocalIp: false,
        public: 'mcbridemanifest.com:8080',
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://mcbridemanifest.com:4200',
            },
        },
    }
}
