const path = require('path');

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    watch: true,    
    module: {
        rules: [{ test: /\.scss$/, 
                 use: ['style-loader', 'css-loader', 'sass-loader'] 
               }]
      },
}