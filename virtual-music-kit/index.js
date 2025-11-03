// массив нот
const sounds = [
    {id: 'do', label: 'Do', file: 'assets/do.mp3', code: 'KeyA'},
    {id: 're', label: 'Re', file: 'assets/re.mp3', code: 'KeyS'},
    {id: 'mi', label: 'Mi', file: 'assets/mi.mp3', code: 'KeyD'},
    {id: 'fa', label: 'Fa', file: 'assets/fa.mp3', code: 'KeyF'},
    {id: 'salt', label: 'Salt', file: 'assets/salt.mp3', code: 'KeyG'},
    {id: 'la', label: 'La', file: 'assets/la.mp3', code: 'KeyH'},
    {id: 'si', label: 'Si', file: 'assets/si.mp3', code: 'KeyJ'},
    {id: 'do-sharp', label: 'Do#', file: 'assets/do-sharp.mp3', code: 'KeyW'},
    {id: 're-sharp', label: 'Re#', file: 'assets/re-sharp.mp3', code: 'KeyE'},
    {id: 'fa-sharp', label: 'Fa#', file: 'assets/fa-sharp.mp3', code: 'KeyT'},
    {id: 'salt-sharp', label: 'Salt#', file: 'assets/salt-sharp.mp3', code: 'KeyY'},
    {id: 'la-sharp', label: 'La#', file: 'assets/la-sharp.mp3', code: 'KeyU'},
];

// создание объекта audio для каждой ноты
sounds.forEach(sound => {
    sound.audio = new Audio(sound.file)
});

// добавление хедера на страницу
const header = document.createElement('header');
header.classList.add('header');
header.textContent = "Virtual Piano Kit";
document.body.appendChild(header);

// создание основной области
const main = document.createElement('main');
document.body.appendChild(main);

// добавление секции для игры на пианино в мэйн
const play = document.createElement('section');
play.setAttribute('id', 'play');
main.appendChild(play);

// создание пианино
const piano = document.createElement('div');
piano.classList.add('piano');
play.appendChild(piano);

// создание клавиш
sounds.forEach(sound => {
    const key = document.createElement('div');
    key.classList.add('key');
    key.textContent = sound.label;
    key.dataset.code = sound.code;
    piano.appendChild(key);
});

// добавление секции автоматического воспроизведения мелодии в мэйн
const autoPlay = document.createElement('section');
autoPlay.setAttribute('id', 'auto-play');
main.appendChild(autoPlay);

// создание обертки
const autoPlayWrapper = document.createElement('div');
autoPlayWrapper.classList.add('auto-play-wrapper');
autoPlay.appendChild(autoPlayWrapper);

// создание текстового поля с лэйблом
const autoPlayLabel = document.createElement('label');
autoPlayLabel.textContent = 'Enter a sequence of notes';
autoPlayLabel.setAttribute('for', 'auto-play-input');
autoPlayLabel.classList.add('auto-play-label');
autoPlayWrapper.appendChild(autoPlayLabel);

const autoPlayInput = document.createElement('input');
autoPlayInput.type = 'text';
autoPlayInput.maxLength = sounds.length * 2;
autoPlayInput.setAttribute('id', 'auto-play-input');
autoPlayWrapper.appendChild(autoPlayInput);

// создание кнопки проигрывания последовательности нот
const autoPlayButton = document.createElement('button');
autoPlayButton.textContent = 'Play';
autoPlayButton.classList.add('auto-play-button');
autoPlayWrapper.appendChild(autoPlayButton);