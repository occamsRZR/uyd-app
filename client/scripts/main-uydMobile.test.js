'use strict';
var angular = require('angular-mocks');
var app = require('./main-uydMobile.js');

describe('app', function() {

    beforeEach(function() {
        angular.mock.module(app.name);
    });

    it('should be defined', function() {
        expect(app).toBeDefined();
    });

});