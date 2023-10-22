import musicSound from '../assets/time-sound.mp3';

export function stopTimerMusic() {
  let audio2 = new Audio(musicSound);
  audio2.pause();
  audio2.currentTime = 0;
}
