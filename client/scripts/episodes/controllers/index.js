'use strict';

module.exports = function(app) {
    // inject:start
    require('./list')(app);
    require('./trending')(app);
    // inject:end
};