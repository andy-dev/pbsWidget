var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('js'), //sets a relative root directory for entry key
    entry: "./entry",
    output: {
        path: path.resolve("build/"), //where to put our build js file
        filename: "bundle.js"
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery: "jquery",
            "window.Jquery": "jquery"
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, exlude:/node_modules/, loader: "style!css" },
            { test: /\.hbs/, exlude:/node_modules/, loader: "handlebars-template-loader" },
            { test: /\.json/, exlude:/node_modules/, loader: "json-loader" },
            { test: /\.(png|jpg|ttf|eot|woff|svg|woff2)$/, exclude:/node_modules/, loader:"url-loader"}
        ]
    },
    node: {
        fs: "empty" // avoids error messages for handlebars
    }
};


