(function () {
  angular
    .module('blocJams')
    .directive('tabPane', tabPane);

  function tabPane () {
    return {
      require: '^tabs',
      restrict: 'E',
      scope: {
        title: '@'
      },
      transclude: true,
      replace: true,
      templateUrl: '/templates/directives/tab-pane.html',
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      }
    }
  }
})();