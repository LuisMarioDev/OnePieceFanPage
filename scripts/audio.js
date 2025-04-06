
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio-player');
    const muteButton = document.getElementById('mute-button');
    const muteIcon = muteButton.querySelector('i');
  
    muteButton.addEventListener('click', function () {
      if (audio.muted) {
        audio.muted = false;
        muteIcon.classList.remove('bx-volume-mute');
        muteIcon.classList.add('bx-volume-full');
      } else {
        audio.muted = true;
        muteIcon.classList.remove('bx-volume-full');
        muteIcon.classList.add('bx-volume-mute');
      }
    });
  });
  