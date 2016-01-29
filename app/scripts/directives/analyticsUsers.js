(function () {
  angular
    .module('blocJams')
    .directive('analyticsUsers', analyticsUsers);

  function analyticsUsers () {
    return {
      restrict: 'E',
      scope: {  },
      templateUrl: '/templates/directives/analytics-users.html',
      link: function(scope, element, attrs) {
      }
    }
  }
})();