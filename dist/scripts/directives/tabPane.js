(function () {
  angular
    .module('blocJams')
    .directive('pane', pane);

  function pane () {
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