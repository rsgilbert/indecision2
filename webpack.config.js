// entry -> output

const path = require('path')

module.exports = { 
    entry: "./src/app.js"
    ,output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
    // how you want to use your loader
    ,module: {
        rules: [
            {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    
    ]
    }
    ,devtool: 'cheap-module-eval-source-map'
    ,devServer: {
        contentBase: path.join(__dirname, "public")
    }
}

// read more about regular expressions