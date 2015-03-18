'use strict';
var controllername = 'list';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$scope', '$http'];

    function controller($scope, $http) {
	$http.get('http://archive.uhhyeahdu.de/episodes.json').
	    success(function(data, status, headers, config) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.episodes = data.episodes;
	    }).
	    error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		console.log('Error in the list controller action');
	    });
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
