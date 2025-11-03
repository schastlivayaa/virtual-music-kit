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