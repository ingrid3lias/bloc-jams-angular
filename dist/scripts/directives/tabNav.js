(function () {
  angular
    .module('blocJams')
    .directive('tabNav', tabNav);

  function tabNav () {
    return {
      require: '^tabs',
      restrict: 'E',
      link: function(scope, element, attrs, tabsCtrl) {

        scope.toggleTabsNav = function (event) {
          event.preventDefault();
          tabsCtrl.toggleTabsNav();
        }
      }
    }
  }
})();