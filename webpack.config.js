const path = require('path');

module.exports = {
    entry: ['./src/devtools/lib/components/my-element.js'],
    output: {
        filename: 'deps.js',
        path: path.resolve(__dirname, 'src'),
    },
};