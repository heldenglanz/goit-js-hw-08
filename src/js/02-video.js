
const throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('timeupdate', throttle(function(time) {
        localStorage.setItem("videoplayer-current-time", time.seconds);
    }),1000);
const time = localStorage.getItem("videoplayer-current-time");
console.log(time);
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));


