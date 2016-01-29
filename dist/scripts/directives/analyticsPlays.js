(function () {
  angular
    .module('blocJams')
    .directive('analyticsPlays', analyticsPlays);

  function analyticsPlays () {
    return {
      restrict: 'E',
      scope: {  },
      templateUrl: '/templates/directives/analytics-plays.html',
      link: function(scope, element, attrs) {
      }
    }
  }
})();