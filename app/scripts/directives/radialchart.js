(function () {
  angular
    .module('blocJams')
    .directive('radialCharts', radialChart);

  function radialCharts () {
    return {
      restrict: 'E',
      scope: {  },
      templateUrl: '',
      link: function(scope, element, attrs) {
      }
    }
  }
})();