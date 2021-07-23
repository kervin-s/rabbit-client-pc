/* eslint-disable prettier/prettier */

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    'style-resources-loader': {
        preProcessor: 'less',
        // 哪些文件自动引入，使用绝对路径
        // 需要是path.join来拼接完整路径
        patterns: [
            path.join(__dirname, './src/assets/styles/variables.less'),
            path.join(__dirname, './src/assets/styles/mixins.less')
        ]
    },

    chainWebpack: config => {
        // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views')),
            config.module
                .rule('images')
                .use('url-loader')
                .loader('url-loader')
                .tap(options => Object.assign(options, { limit: 10000 }))
        // 这个是给webpack-dev-server开启可IP和域名访问权限。
        config.devServer.disableHostCheck(true)
    },
    // 这个是设置外部扩展，模块为qc变量名为QC，导入qc将不做打包。
    configureWebpack: {
        externals: {
            qc: 'QC'
        }
    }
}