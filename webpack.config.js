module.exports = { // the config file returns an object with multiple items and properties:
    entry: "./app/app.jsx", // (input) this is where our writetn file wil be fetched
    output: { // output takes an object with path: which is the directory name, we can use __dirname to get our dir
        path: __dirname,
        filename: "./public/bundle.js" // we write our outputted file's path and name we want it to take.
    },
    resolve: { // resolve goes and fetches all of the files with the extensions that are defined in the resolve object...
        root: __dirname,
        alias: {
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                },
                test: /\.jsx?$/,
                exclude: /(name_modules|bower_components)/
            }
        ]
    }
};
