import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

function onSaveTimeupdate({ seconds } = 0) {
  localStorage.setItem(STORAGE_KEY, Math.round(seconds));
}

function getVideoplayerCurrentTimeLS() {
  return localStorage.getItem(STORAGE_KEY);
}

player.setCurrentTime(getVideoplayerCurrentTimeLS());

player.on('timeupdate', throttle(onSaveTimeupdate, 1000));
