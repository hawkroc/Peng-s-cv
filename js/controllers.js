'use strict';

/* Controllers */

var demoControllers = angular.module('demoControllers', []);


demoControllers.controller('AppCtrl2', function($scope, $timeout, $mdSidenav, $mdUtil, $mdBottomSheet, $log, iniDataService) {
  $scope.toggleLeft = buildToggler('left');
  $scope.tilte = " This is Peng's restful onlin CV which is base on angularjs";
  $scope.checkEdu = true;

  $scope.skill = iniDataService.get("skill").query();
  $scope.interests = iniDataService.get("interests").query();
  $scope.eduction = iniDataService.get("edu").query();
  $scope.project = iniDataService.get("project").query();
  $scope.messages = iniDataService.get("ini").query();

  $scope.showGridBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'connect.html',
      controller: 'connectCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      //$scope.alert = clickedItem.name + ' clicked!';
    });
  };

  function buildToggler(navID) {
    var debounceFn = $mdUtil.debounce(function() {
      $mdSidenav(navID)
        .toggle()
        .then(function() {
          $log.debug("toggle " + navID + " is done");
        });
    }, 300);
    return debounceFn;
  }
});


demoControllers.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close()
      .then(function() {
        $log.debug("close LEFT is done");
      });
  };
})

demoControllers.controller('connectCtrl', ['$scope', function($scope) {
  $scope.items = [{
      face: '/img/digital.svg',
      what: '0210323932'

    }, {
      face: '/img/letter.svg',
      what: 'yinpenghawk@gmail.com'

    },


    {
      face: '/img/map.svg',
      what: 'Mt Albert Auckland'
    },

    {
      face: '/img/linkedin.svg',
      what: 'nz.linkedin.com/pub/peng-yin/a8/39b/31/'

    }

  ];
}])
demoControllers.config(function($mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
});