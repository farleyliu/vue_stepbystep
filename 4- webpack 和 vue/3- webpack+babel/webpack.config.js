var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/main.js'],   // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
    output: {
        path: path.resolve(__dirname, './dist'),  // 项目的打包输出文件路径
        publicPath: '/dist/',                     // 通过devServer访问路径
        filename: 'index.js'                      // 打包后的文件名
    },
    devServer: {
        historyApiFallback: true,
        overlay: true
    },
    // vue模块引入
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [ 
            //css about
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            //babel about
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            //image file
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }         
        ]
    }
};