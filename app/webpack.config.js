const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.css$/,
                // use:{
                //     loader:['style-loader','css-loader']
                // }
                use:[{loader:'style-loader'},{loader:'css-loader'}]
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
};//new HtmlWebpackPlugin({template: './src/index.html'})