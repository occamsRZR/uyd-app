'use strict';

module.exports = function(app) {
    // inject:start
    require('./trending')(app);
    // inject:end
};