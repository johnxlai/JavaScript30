// Get all the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build out functions

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  //this is refer to video
  let buttonIcon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = buttonIcon;
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Hook up the events
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => button.addEventListener('click', skip));
