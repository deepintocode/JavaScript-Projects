

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.firstChild.nextSibling.addEventListener('transitionend', removeTransition));

function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0; // rewind to start
  var playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(function(){
      audio.play();
    }).catch(function(err)
  {
    console.log(err);
  });
  }
  //Select keyboard letter in the DOM
  var kbd = key.firstChild.nextSibling;
  kbd.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // Skip if it's not a transform
  this.classList.remove('playing');
}
