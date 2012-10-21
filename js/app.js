'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/A1', {templateUrl: 'content/A/A1.html', controller: synonymsController});
    $routeProvider.when('/A2', {templateUrl: 'content/A/A2.html', controller: synonymsController});
    $routeProvider.when('/A3', {templateUrl: 'content/A/A3.html', controller: synonymsController});
    $routeProvider.when('/A4', {templateUrl: 'content/A/A4.html', controller: synonymsController});
    $routeProvider.otherwise({redirectTo: '/A1'});
  }]);
  
  
  
  app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        if(input) return input.slice(start);
    }
});