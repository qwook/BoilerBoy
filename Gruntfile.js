module.exports = function (grunt) {

	var webpack = require("webpack");

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'webpack': {
			options: {
				entry: "./src/index.js",
				output: {
					path: "./build",
					filename: "bundle.js"
				},
				module: {
					loaders: [
						{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},
						{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
					]
				},
				plugins:[
					new webpack.HotModuleReplacementPlugin()
				],
				devtool: "#source-map",
				inline: true
			},
			default: {
				watch: false,
				keepalive: false
			},
			watch: {
				watch: true,
				keepalive: true,
				failOnError: false
			}
		},
		'webpack-dev-server': {
			test: {
				webpack: {
					entry: "./src/index.js",
					output: {
						path: "./build",
						filename: "bundle.js"
					},
					module: {
						loaders: [
							{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},
							{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
						]
					},
					plugins:[
						new webpack.HotModuleReplacementPlugin()
					],
					devtool: "#source-map"
				},
				host: "localhost",
				inline: true,
			    publicPath: "/build/",
				keepAlive: true
			}
		}
	})

	grunt.loadNpmTasks('grunt-webpack');


	grunt.registerTask('default', ['webpack-dev-server']);
	grunt.registerTask('bundle', ['webpack']);

}