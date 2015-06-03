var execSync = require('sync-exec');

module.exports = function(path) {
    return function(req, res, next) {
        var build = 'cd ' + path + ' && sudo ulimit -n 10000 && duo --use ../../node_modules/duo-jade --copy index.{js,css}'
        console.info(execSync(build).stderr);
        next();
    };
};