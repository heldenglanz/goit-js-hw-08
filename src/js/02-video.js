
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);












// const player = new Player('handstick', {
//     id: "vimeo-player",
//     width: 640
// });
// player.on('click', function(data) {
//     console.log('played the video!');
// });
player.on('click', onPlay);
const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", data);
    // data is an object containing properties specific to that event
};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(data){
})
