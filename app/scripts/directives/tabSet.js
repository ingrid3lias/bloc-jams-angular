(function(){
    function tabSet(){
        
        return {
            restrict: 'E',
            transclude: true,
            scope: { },
            templateUrl: '/templates/directives/tab_set.html',
        };
    }
    
    angular
        .module('blocJams')
        .directive('tabSet', tabSet)
})