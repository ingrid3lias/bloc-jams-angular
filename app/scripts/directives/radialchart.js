(function () {
  angular
    .module('blocJams')
    .directive('radialCharts', radialChart);

  function radialCharts () {
    return {
      restrict: 'E',
      scope: {  },
      templateUrl: '/templates/directives/radialChart.html',
      link: function(scope, element, attrs) {
      }
    }
  }
})();