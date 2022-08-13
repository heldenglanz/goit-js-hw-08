
import Player from '@vimeo/player';

const videoEl = document.querySelector('iframe');

const player = new Player("vimeo-player");

player.on('play', function() {
    console.log('played the video!');
});
