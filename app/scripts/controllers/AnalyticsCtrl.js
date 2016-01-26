(function(){
    function AnalyticsCtrl(Fixtures){
        this.albumData = Fixtures.getAlbum();
    }
    
    angular
        .module('blocJams')
        .controller('AnalyticsCtrl', ['Fixtures', AnalyticsCtrl]);
    
})();