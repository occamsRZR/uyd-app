'use strict';
require('angular-ui-router');

var modulename = 'episodes';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;
    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router']);
    // inject:folders start
    require('./controllers')(app);
    // inject:folders end
    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home', {
                url: '/',
		views: {
		    home: {
			template: require('./views/home.html'),
			controller: 'main.episodes.trending'
		    }
		}
            });
            $stateProvider.state('episodes', {
                url: '/episodes',
		views: {
		    episodes: {
			template: require('./views/episodes.html'),
			controller: 'main.episodes.list'
		    }
		}
            });
	    $stateProvider.state('help', {
                url: '/help',
		views: {
		    help: {
			template: require('./views/help.html')
		    }
		}
            });
        }
    ]);

    return app;
};
