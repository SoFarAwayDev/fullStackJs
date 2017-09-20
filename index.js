
/*eslint-disable no-undef*/
require('babel-register')({
    "plugins": [
        [
            "css-modules-transform", {
            "generateScopedName": "[name]_[local]_[hash:base64:5]",
            "extensions": [".css"]
        }
        ]
    ]
});
require('babel-polyfill');

require('./server/server');
/*eslint-disable no-undef*/ 
