// vue.config.js
module.exports = {
    // options...
    devServer: {
        useLocalIp: false,
        public: 'tessmika.com:8080',
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://tessmika.com:4200',
            },
        },
    }
}