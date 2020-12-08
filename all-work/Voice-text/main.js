const { speechSynthesis } = window;

const voicesSelect = document.getElementById("voices"),
  rate = document.getElementById("rate"),
  pitch = document.getElementById("pitch"),
  text = document.getElementById("text");

let voices = [];

const generateVoices = () => {
  voices = speechSynthesis.getVoices();

  const voicesList = voices
    .map((voice, index) => `<option value=${index}>${voice.name} (${voice.lang})</option>`)
    .join("");

    voicesSelect.innerHTML = voicesList;
};

const speak = () => {
    if (speechSynthesis.speaking) {
        console.log('dont work')
        return;
    }

    if (text.value !== '') {
        const ssUtterance = new SpeechSynthesisUtterance(text.value);

        ssUtterance.voice = voices[voicesSelect.value];
        ssUtterance.pitch = pitch.value;
        ssUtterance.rate = rate.value;

        speechSynthesis.speak(ssUtterance)
    }
};

generateVoices();

document.getElementById('btn-stop').addEventListener('click', () => speechSynthesis.cancel());
document.getElementById('btn-play').addEventListener('click', speak);

rate.addEventListener('change', () => document.querySelector('.rate-value').textContent = rate.value);
pitch.addEventListener('change', () => document.querySelector('.pitch-value').textContent = pitch.value);

speechSynthesis.addEventListener('voiceschanged', generateVoices);
