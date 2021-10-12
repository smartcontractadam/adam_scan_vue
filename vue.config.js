module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                // target:'http://39.104.78.79', // 代理地址
                target: 'https://scan.adamoracle.io:10001',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: process.env.NODE_ENV !== 'production'
}
