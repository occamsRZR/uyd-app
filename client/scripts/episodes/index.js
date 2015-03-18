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

            $stateProvider
		.state('home', {
                    url: '/',
		    views: {
			home: {
			    template: require('./views/home.html'),
			controller: 'main.episodes.trending'
			}
		    }
		})
	    $stateProvider.state('episodes', {	    // episodes index
                url: '/episodes',
		views: {
		    episodes: {
			template: require('./views/episodes.html'),
			controller: 'main.episodes.list'
		    }
		}
	    });
	    $stateProvider.state('episode.show', {	    // episodes show
                url: '/:episodeId',
		views: {
		    episodeShow: {
			template: require('./views/show.html'),
			controller: 'main.episodes.show'
		    }
		}
	    });
	    // help
	    $stateProvider
		.state('help', {
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
