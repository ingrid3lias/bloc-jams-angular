(function () {
  angular
    .module('blocJams')
    .directive('tabs', tabs);

  function tabs () {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {},
      controllerAs: 'tabsCtrl',
      templateUrl: '/templates/directives/tabs.html',
      controller: ['$scope', TabsCtrl]
    }

    function TabsCtrl ($scope) {

      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      }

      this.addPane = function(pane) {
        if (panes.length == 0) $scope.select(pane);
        panes.push(pane);
      }

    }
  }
})();