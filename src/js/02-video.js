
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onSaveTime, 500));

function onSaveTime({seconds}) {
    localStorage.setItem(STORAGE_KEY, seconds)
}
const dataStorage = localStorage.getItem(STORAGE_KEY);
// console.log(dataStorage)

    if(dataStorage){
        player.setCurrentTime(dataStorage)
    }