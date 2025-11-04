// массив нот
const sounds = [
    {id: 'do', label: 'A', file: 'assets/do.mp3', code: 'KeyA'},
    {id: 're', label: 'S', file: 'assets/re.mp3', code: 'KeyS'},
    {id: 'mi', label: 'D', file: 'assets/mi.mp3', code: 'KeyD'},
    {id: 'fa', label: 'F', file: 'assets/fa.mp3', code: 'KeyF'},
    {id: 'salt', label: 'G', file: 'assets/salt.mp3', code: 'KeyG'},
    {id: 'la', label: 'H', file: 'assets/la.mp3', code: 'KeyH'},
    {id: 'si', label: 'J', file: 'assets/si.mp3', code: 'KeyJ'},
    {id: 'do-sharp', label: 'W', file: 'assets/do-sharp.mp3', code: 'KeyW'},
    {id: 're-sharp', label: 'E', file: 'assets/re-sharp.mp3', code: 'KeyE'},
    {id: 'fa-sharp', label: 'T', file: 'assets/fa-sharp.mp3', code: 'KeyT'},
    {id: 'salt-sharp', label: 'Y', file: 'assets/salt-sharp.mp3', code: 'KeyY'},
    {id: 'la-sharp', label: 'U', file: 'assets/la-sharp.mp3', code: 'KeyU'},
];

// === СОЗДАНИЕ ЭЛЕМЕНТОВ ИНТЕРФЕЙСА ===

// создание объекта audio для каждой ноты
sounds.forEach(sound => {
    sound.audio = new Audio(sound.file)
});

// добавление хедера на страницу
const header = document.createElement('header');
header.classList.add('header');
document.body.appendChild(header);

const headerTitle = document.createElement('h1');
headerTitle.classList.add('header__title');
headerTitle.textContent = "Virtual Piano Kit";
header.appendChild(headerTitle);

// создание основной области
const main = document.createElement('main');
main.classList.add('main');
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
    key.classList.add('piano__key');

    if (sound.id.includes('-sharp')) {
        key.classList.add('piano__key_black');
    }

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
autoPlayWrapper.classList.add('auto-play__wrapper');
autoPlay.appendChild(autoPlayWrapper);

// создание текстового поля с лэйблом
const autoPlayInputWrapper = document.createElement('div');
autoPlayInputWrapper.classList.add('input-block');
autoPlayWrapper.appendChild(autoPlayInputWrapper);

const autoPlayLabel = document.createElement('label');
autoPlayLabel.textContent = `Enter a sequence of notes (max: ${sounds.length * 2})`;
autoPlayLabel.setAttribute('for', 'auto-play-input');
autoPlayLabel.classList.add('auto-play__label');
autoPlayInputWrapper.appendChild(autoPlayLabel);

const autoPlayInput = document.createElement('input');
autoPlayInput.type = 'text';
autoPlayInput.maxLength = sounds.length * 2;
autoPlayInput.setAttribute('id', 'auto-play-input');
autoPlayInput.classList.add('auto-play__input');
autoPlayInputWrapper.appendChild(autoPlayInput);

// создание кнопки проигрывания последовательности нот
const autoPlayButton = document.createElement('button');
autoPlayButton.textContent = 'Play';
autoPlayButton.classList.add('auto-play__button');
autoPlayWrapper.appendChild(autoPlayButton);

// === ВОСПРОИЗВЕДЕНИЕ ЗВУКА ===

// добавление слушателей нажатия мыши
const keys = document.querySelectorAll('.piano__key');
keys.forEach(key => {
    key.addEventListener('mousedown', () => playSound(key.dataset.code));
    key.addEventListener('mouseup', () => deactivateKey(key.dataset.code));
});

// добавление слушателей нажатия клавиши клавиатуры
document.addEventListener('keydown', (event) => {
    if (event.repeat) return; // блокируем повторение звука при зажатии клавиши
    playSound(event.code);
});

document.addEventListener('keyup', (event) => {
    deactivateKey(event.code);
});

// функция воспроизведения зука
function playSound(code) {
    const currentSound = sounds.find(s => s.code === code);
    if (!currentSound) return;

    currentSound.audio.currentTime = 0;
    currentSound.audio.play();

    const currentKey = document.querySelector(`[data-code="${code}"]`);
    if (currentKey) currentKey.classList.add('piano__key_active');
}

// функция ресета клавиши пианино
function deactivateKey(code) {
    const currentKey = document.querySelector(`[data-code="${code}"]`);
    if (currentKey) currentKey.classList.remove('piano__key_active');
}