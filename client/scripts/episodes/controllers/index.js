'use strict';

module.exports = function(app) {
    // inject:start
    require('./list')(app);
    require('./show')(app);
    require('./trending')(app);
    // inject:end
};