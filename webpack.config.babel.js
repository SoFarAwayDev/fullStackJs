module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js'],
    modules: [
        'client',
        'node_modules',
    ],
  },
  module: {
    loaders: [
        {	
            test:	/\.css$/,	
            loader:	'style-loader!css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]',	
        },	
        {
            test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
            loader: 'url-loader?limit=10000',
        },
    ],
  }
};
