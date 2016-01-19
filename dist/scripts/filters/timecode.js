 (function() {
     function timecode() {
         return function(seconds) {
            
            /* Refactoring timecode filter with buzz library method */ 
             
            return buzz.toTimer(seconds);
             
         };
     }

     angular
         .module('blocJams')
         .filter('timecode', timecode);
 })();