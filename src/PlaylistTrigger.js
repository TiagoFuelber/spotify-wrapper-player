const albumTracks = document.getElementById('album-tracks');
let audioObject = null;

export default function playlistTrigger() {
  albumTracks.addEventListener('click', (e) => {
    const target = e.target.parentNode;

    if (target.classList.contains('active')) {
      audioObject.pause();
      return;
    }

    if (audioObject) {
      audioObject.pause();
    }

    audioObject = new Audio(target.getAttribute('data-track-preview'));
    audioObject.play();
    target.classList.add('active');

    audioObject.addEventListener('pause', () => {
      target.classList.remove('active');
    });
  });
}
