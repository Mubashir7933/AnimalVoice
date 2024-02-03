window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;//Stop the function from running all together.
    audio.currentTime = 0; // rewind the audio after pressing the keys
    audio.play();
    key.classList.add('playing');
   // key.classList.remove('remove');
});

function removeTransition(e){
if (e.propertyName !== 'transform') return;// skip if it's not a 
//transform
this.classList.remove('playing'); //This is basically refering to the key that is going to be pressed
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
