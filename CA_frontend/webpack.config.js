const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',　//buildするファイル
    output: {
        filename: 'bundle.js',　//build後のファイル名
        path: path.join(__dirname, '../django_react/react_app/static/js') //buildファイルが作成される場所
    },
    module: {
        rules: [
          {
            test: /\.js[x]?$/,  
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react' 
                ],
                plugins: ['@babel/plugin-syntax-jsx'] 
              }
            }
          },
          {
            test: /\.css$/, 
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.json']
      }
};