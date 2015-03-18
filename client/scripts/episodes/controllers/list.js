'use strict';
var controllername = 'list';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$scope'];

    function controller($scope) {
	$scope.message = "HelloGrrrl";
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
