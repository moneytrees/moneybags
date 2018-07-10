const fs = require('fs');
const path = require('path');
const util = require('util');

const TraverseRoutes = function(args, result = []) {
    fs.readdirSync(args.dir).forEach((file) => {
        const fPath = path.resolve(args.dir, file);
        const fileStats = { file, path: fPath };
        fileStats.type = 'file';
        const thisRoute = require(fPath)(args.app, args.express);
        args.app.use('/',thisRoute);
        result.push(fileStats);
    });
    return result;
};

module.exports = {
    getRoutes: TraverseRoutes
};