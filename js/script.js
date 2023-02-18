const textarea = document.querySelector('textarea');
let speechbtn = document.querySelector('button');
let isspeaking = true;


// function for speak the speech
function texttospeech(text) {
    let utternance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utternance);
}

speechbtn.addEventListener("click", e => {
    e.preventDefault();
    if (textarea.value !== "") {
        if (!speechSynthesis.speaking) {  //if the speech is not currently in the process of speaking
            texttospeech(textarea.value);
        }
        if (textarea.value.length > 30) {
            if (isspeaking) {
                speechSynthesis.resume();
                isspeaking = false;
                speechbtn.innerHTML = 'pause speech';
            } else {
                speechSynthesis.pause();
                isspeaking = true;
                speechbtn.innerHTML = 'play speech';
            }
        }

    }
})