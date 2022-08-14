
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const STORAGE_KEY = "videoplayer-current-time";
const player = new Player("vimeo-player");

player.on('play', function() {
    console.log('played the video!');

});

player.on('timeupdate', throttle(onSaveTime, 500))


function onSaveTime({seconds}){
    localStorage.setItem(STORAGE_KEY, seconds)
}

const getStorageValue = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(getStorageValue)

