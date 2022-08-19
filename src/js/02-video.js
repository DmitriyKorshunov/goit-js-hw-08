import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_WATCHING_TIME = 'videoplayer-current-time';

const onPlay = function ({ seconds }) {
  localStorage.setItem(VIDEO_WATCHING_TIME, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(VIDEO_WATCHING_TIME);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
