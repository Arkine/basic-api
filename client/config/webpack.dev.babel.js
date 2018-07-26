import paths from './paths';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
import webpack from 'webpack';

export default merge(common, {
    mode: 'development',
    entry: [
        paths.appIndexJs
    ],
    output: {
        path: paths.appOutput,
        filename: '[name].bundle.js'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});