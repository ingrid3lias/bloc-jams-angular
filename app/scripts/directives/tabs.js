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
      var vm = this;
      var tabPanes = $scope.tabPanes = [];

      $scope.tabsNavVisible = !$scope.tabsNavVisible;

      $scope.select = function (tabPane) {

        angular.forEach(tabPanes, function (tabPane) {
          tabPane.selected = false;
        });

        tabPane.selected = true;
        $scope.tabsNavVisible = !$scope.tabsNavVisible;
      };

      vm.addPane = function (tabPane) {
        if (tabPanes.length == 0) $scope.select(tabPane);
        tabPanes.push(tabPane);
      };

      vm.toggleTabsNav = function () {
        $scope.tabsNavVisible = !$scope.tabsNavVisible;
      }
    }
  }
})();