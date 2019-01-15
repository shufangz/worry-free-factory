module.exports = {
    transpileDependencies: [
        /\/node_modules\/vue-echarts\//,
        /\/node_modules\/resize-detector\//
    ],
    outputDir: 'worry_free_factory',
    baseUrl: process.env.NODE_ENV === 'production'
    //xampp
    // ? '/worry_free_factory/'
    ? '.'
    : '/'
}