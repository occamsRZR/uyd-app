'use strict';
var controllername = 'show';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$scope', '$stateParams'];

    function controller($scope, $stateParams) {
	$scope.message = 'Hello episode! Slug: ' + $stateParams.episodeId;
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
