const listContainer = document.querySelector('.catalog__sidebar');
const listItem = listContainer.getElementsByTagName('li');

const eventName = 'myCustomEvent';
// Отслеживание всех фаз события
listContainer.addEventListener(eventName, function (event) {
    logEventPhase(event, 'CAPTURING (захват)');
}, true); // true = capturing phase

listItem[0].addEventListener(eventName, function (event) {
    console.log(event.eventPhase)
    event.stopPropagation();
});
listContainer.addEventListener(eventName, function (event) {
    logEventPhase(event, 'TARGET (цель)');
}); // false или отсутствие = target/bubbling phase

listContainer.addEventListener(eventName, function (event) {
    logEventPhase(event, 'BUBBLING (всплытие)');
}, false);

// Функция для логирования всех этапов события
function logEventPhase(event, phaseName) {
    console.log(`Фаза: ${phaseName}`);
    console.log(`Тип события: ${event.type}`);
    console.log(`Цель: ${event.target.tagName}`);
    console.log(`Текущая цель: ${event.currentTarget?.tagName || 'null'}`);
    console.log(`Фаза события: ${event.eventPhase}`);
    console.log('---');
}

/** Создание пользовательского события */
const customEvent = new CustomEvent('myCustomEvent', {
    detail: {
        message: 'Привет от пользовательского события!',
        timestamp: new Date(),
        data: { id: 123, name: 'Тест' }
    },
    bubbles: true,    // Всплывает ли событие
    cancelable: true  // Можно ли отменить
});

// Добавляем обработчик
listItem[1].addEventListener('myCustomEvent', function (e) {
    console.log('Событие получено:', e.detail.message);
    console.log('Данные:', e.detail.data);
    console.log('Время:', e.detail.timestamp);
});

// Отправляем событие
listItem[1].dispatchEvent(customEvent);