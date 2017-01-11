var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');

var PROD = (process.env.NODE_ENV === 'production');

var htmlConfig = require('./webpackConfig/html.config.json');

module.exports = {
    
    entry: [
        "./src/web/index.tsx"
    ],

    output: {
        path: __dirname + '/build/web/',
        filename: 'bundle.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "babel-loader?presets[]=es2015!awesome-typescript-loader" },
            
            // compile .less files
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css?sourceMap!less?sourceMap")
            },

            { test: /\.jpg$/, loader: "file?name=images/[hash].[ext]" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: PROD ? [
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom"
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlPlugin({
            title: htmlConfig.title,
            minify: false,
            template: htmlConfig.inFile,
            filename: htmlConfig.outFile
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: true
        })
    ] : [
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom"
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlPlugin({
            title: htmlConfig.title,
            minify: false,
            template: htmlConfig.inFile,
            filename: htmlConfig.outFile
        })
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};