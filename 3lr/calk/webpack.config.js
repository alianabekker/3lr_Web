const path = require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');
const{CleanWebpackPlugin}=require ('clean-webpack-plugin');

const isDev= process.env.NODE_ENV ==='development';
const isProd=!isDev;

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode:'development',
    entry: './js/index.js',
    output: {
        filename: './js/index.js',
        path: path.resolve(__dirname,'app'),
    },
    devServer: {
        historyApiFallback: true,
        //contentBase: path.resolve(__dirname,'app'),
        open: true,
        compress: true,
        hot: true,
        port:3000,

    },
    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename:'index.html',
            minify:{
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
      ]
};


