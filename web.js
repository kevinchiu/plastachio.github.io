var express = require('express'),
    http = require('http'),
    directory = __dirname;
var port = process.env.PORT || 3000;

express()
    .use(express.static(directory))
    .listen(port);

