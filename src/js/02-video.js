
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const STORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);


player.on('timeupdate', throttle(({seconds}) =>{
    localStorage.setItem(STORAGE_KEY, seconds);
}, 500));

const comeback = localStorage.getItem(STORAGE_KEY)
player.setCurrentTime(comeback)
