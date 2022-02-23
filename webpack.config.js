const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/public',
        filename: './app.ts'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jquery/jquery.min.js',
            bootstrap: 'modules/admin-lte/plugins/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        // loaders: [{
        //     test: /.ts[x]?$/,
        //     loader: 'babel-loader',
        //     exclude: /node_modules/,
        //     query: {
        //         presets: ['es2015', 'react'],
        //         plugins: ['transform-object-rest-spread']
        //     }, {
        //         test: /\.css$/,
        //         loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        //     }, {
        //         test: /\.woff|.woff2|.tff|.eot|.svg|.png|.jpg*.*$/,
        //     },
        // }]
        rules:[
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:'babel-loader'
                    },
                ],
                
            },
            
        ]
    }
}
