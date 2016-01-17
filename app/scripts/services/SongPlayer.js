(function (){
    function SongPlayer($rootScope, Fixtures){
        var SongPlayer = {};
         
        /**
        * @desc Stores the album information in the currentAlbum variable
        * @type {Object}
        */
        
        var currentAlbum = Fixtures.getAlbum();
        
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        
        var currentBuzzObject = null;
        
        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });

            SongPlayer.currentSong = song;
         };
        
        /**
        * @function playSong
        * @desc Plays selected song and changes the playing variable to true
        * @param {Object} song
        */
        
        var playSong = function(song){
            currentBuzzObject.play();
            song.playing = true;
        };
        
        var stopSong = function(song){
            currentBuzzObject.stop();
            song.playing = null;
        };
        
        /**
        * @desc Gets the index of a song
        * @type [Array]
        */
        
        var getSongIndex = function(song){
            return currentAlbum.songs.indexOf(song);
        }
        
         /**
        * @desc Active song object from list of songs
        * @type {Object}
        */
        
        SongPlayer.currentSong = null;
        
        /**
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */
        
        SongPlayer.currentTime = null;
        
        /**
        * @desc Current volume of songs
        * @type {Number}
        */
        
        SongPlayer.volume = 80;
        
        SongPlayer.setVolume = function(volume) {
            if(currentBuzzObject){
                currentBuzzObject.setVolume(volume);
            }
            
            SongPlayer.volume = volume;
        };
        
        
        SongPlayer.play = function(song) {
             song = song || SongPlayer.currentSong;
             if (SongPlayer.currentSong !== song) {
                   setSong(song);
                   playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };
        
        SongPlayer.pause = function(song){
          song = song || SongPlayer.currentSong;
          currentBuzzObject.pause();
          song.playing = false;
        };
        
        /**
        * @function next
        * @desc Changes the currentSong to the previous song by incrementing the song index
        */
        
        SongPlayer.next = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            var song = currentAlbum.songs[currentSongIndex];
            
            if(currentSongIndex > currentAlbum.songs.length - 1){
                stopSong(SongPlayer.currentSong);
            } else {
                setSong(song);
                playSong(song);
            }
        };
        
        /**
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        
        SongPlayer.setCurrentTime = function(time) {
            if(currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };
        
        /**
        * @function previous
        * @desc Changes the currentSong to the previous song by decrementing the song index
        */
        
        SongPlayer.previous = function(){
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            var song = currentAlbum.songs[currentSongIndex];
            
            if(currentSongIndex < 0){
                stopSong(SongPlayer.currentSong);
            } else {
                setSong(song);
                playSong(song);
            }
        };
        
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();