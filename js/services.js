'use strict';

/* Services */
//user the resource
var demoServices = angular.module('demoServices', ['ngResource']);


demoServices.service('iniDataService', ['$resource', function($resource) {
	var intData = function(jsonName) {
		return $resource('json/:test.json', {
			"test": jsonName
		}, {
			query: {
				method: 'GET',
				params: {},
				isArray: true
			}
		});

	};
	return {
		get: intData

	};

}])