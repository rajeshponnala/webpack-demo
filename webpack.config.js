const { mode } = require('webpack-nano/argv'); 
const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');
module.exports = {
    watch: mode === "development",
    entry: ['webpack-plugin-serve/client', './src'],
    mode,
    plugins:[
        new MiniHtmlWebpackPlugin({ context: { title: "Demo" } }),
        new WebpackPluginServe({
            port: parseInt(process.env.port) || 8081,
            static: "./dist",
            liveReload: true,
            waitForBuild: true
        })
    ],
}
