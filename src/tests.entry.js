require('babel-polyfill');

const context = require.context('./', true, /^(.(?!tests\.entry))*\.js$/);

context.keys().forEach(context);