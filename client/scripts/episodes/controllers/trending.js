'use strict';
var controllername = 'trending';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$scope'];

    function controller($scope) {
        var vm = this;
        vm.message = 'HelloGrrrrrl';
	$scope.message = 'helo wrrrld';
        var activate = function() {

        };
        activate();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
