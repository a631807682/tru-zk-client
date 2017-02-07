const path = require('path'),
    mkdirp = require('mkdirp'),
    bunyan = require('bunyan');

module.exports = function(name, loggerPath) {
    mkdirp.sync(loggerPath);

    return bunyan.createLogger({
        name: name,
        streams: [{
            type: 'rotating-file',
            path: path.resolve(loggerPath, 'info.log'),
            period: '1d',
            count: 10
        }, {
            level: 'error',
            path: path.resolve(loggerPath, 'error.log')
        }]
    });
};
