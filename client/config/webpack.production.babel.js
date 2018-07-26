import common from './webpack.common.babel';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import paths from './paths';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default merge(common, {
    mode: 'production',
    entry: {
        app: paths.appSrc,
    },
    output: {
        publicPath: '/assets/',
        path: paths.appOutput,
        filename: '[name].bundle.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css'
        }),
        new HtmlWebpackPlugin({
            title: 'basic api',
            filename: paths.appHtml,
            template: paths.appTemplate
        })
    ]
})