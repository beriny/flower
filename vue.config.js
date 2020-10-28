module.exports = {
    devServer: {
        proxy: {
            '/posts': {
                target: 'https://jsonplaceholder.typicode.com/',
                changeOrigin: true,
                ws: true,
            }
        }
    }
};