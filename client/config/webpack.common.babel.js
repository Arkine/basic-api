import paths from './paths';
import webpackDevBabel from './webpack.dev.babel';

export default {
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            app: paths.appSrc
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                includes: [
                    paths.appSrc,
                ],
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
