'use strict';

/* Directives */

var demoDirectives = angular.module('demoDirectives', []);

demoDirectives.directive('scollDir', [function() {
  return {
    //  require: '^ngModel',
    restrict: 'AE',
    link: function(scope, iElement, iAttrs) {

      iElement.mousewheel(function(event) {
        var n = $(".mark").parent(".arrow").attr("id").replace("menue", "");

        var id = "arrow" + n;
        var button = "button" + n;
        $("#" + button).css({
          color: 'indigo'
        });

        $("#" + id).remove();
        n = parseInt(n) + 1;
        if (n > 3) {
          n = 0
        };

        var id1 = "arrow" + n;
        var menue = "menue" + n;
        var button2 = "button" + n;
        $("#" + menue).append('<img class="mark" id="' + id1 + '" src="/img/left_arrow.svg" >');
        $("#" + button2).css({
          color: 'red'

        });

        scope.$apply(function() {
          scope.checkEdu = false;
          scope.checkSkill = false;
          scope.checkPro = false;
          scope.checkInt = false;
          switch (n) {
            case 0:
              scope.checkEdu = true;
              break;
            case 1:

              scope.checkSkill = true;

              break;
            case 2:
              scope.checkPro = true;
              break;
            case 3:
              scope.checkInt = true;
              break;
            default:

          };


        });

      });

    }
  };
}])

demoDirectives.directive('alertDir', ['$mdDialog', function($mdDialog) {
  return {
    restrict: 'AE',
    link: function(scope, iElement, iAttrs) {
      var s = "This is based on angularjs by PengYin if you like it." + "you can check  source code on gitHub";
      $(document).ready(function() {
        $mdDialog.show(
          $mdDialog.alert()

          .title('This is cv of peng')
          .content(s)
          .ariaLabel('Alert Dialog Demog')
          .ok('Got it!')

        ).then(function() {
          $('#body').css({

            overflow: 'hidden'

          });

        });


      });


    }
  };
}])