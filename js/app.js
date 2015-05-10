'use strict';

/* App Module */

var demoApp = angular.module('App', [
  'ngRoute',
  'ngAnimate',
  'ngMaterial',
  'demoAnimations',
  'demoDirectives',
  'demoControllers',
  'demoFilters',
  'demoServices'
]);

demoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    
      when('/cv', {
        templateUrl: 'partials/cv.html'
        
      }).
       otherwise({
        redirectTo: '/cv'
      });
  }]);





