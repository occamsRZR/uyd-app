'use strict';
require('angular-ui-router');
require('angular-ionic');
require('famous-angular');
require('ngCordova');

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
			template: require('./views/home.html')
		    }
		},
		controller: fullname + '.trending as trendingCtrl'
            })
            $stateProvider.state('episodes', {
                url: '/episodes',
		views: {
		    episodes: {
			template: require('./views/episodes.html')
		    }
		},
		controller: 'main.episodes.trending as trendingCtrl'
		
            })
	    $stateProvider.state('help', {
                url: '/help',
		views: {
		    help: {
			template: require('./views/help.html')
		    }
		}
            })
	    console.log('from router' + fullname + '.trending as trendingCtrl');

        }
    ]);

    return app;
};
