import merge from 'webpack-merge';
import dev from './webpack.dev.babel';
import paths from './paths';

export default merge(dev, {
    devServer: {
        contentBase: paths.appOutput,
        publicPath: 'http://localhost:300/assets',
        proxy: {
            '*': 'http://localhost:5000',
        },
        port: 3000,
        historyApiFallback: true,
        hot: true,
        overlay: true,
        compress: true,
        inline: true,
    }
});