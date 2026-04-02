// function timeoutWithVar() {
//     console.log('start');
//     for (var i = 1; i <= 3; i++) {
//         setTimeout((i) => {
//             console.log(i);
//         }, 1000, i);
//     }

//     console.log('end');
// }

// timeoutWithVar();

// const promise = new Promise((resolve, reject) => {
//     const success = true;

//     if (success) {
//         resolve("Операция выполнена");
//     } else {
//         reject("Произошла ошибка");
//     }
// });

// promise
//     .then((result) => {
//         console.log("Успех:", result);
//         return Promise.resolve(3);
//     })
//     .then((v) => console.log(v))
//     .catch((error) => {
//         console.log("Ошибка:", error);
//     })
//     .finally(() => console.log(1));

// const wait = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Прошла 1 секунда");
//     }, 1000);
// });

// wait.then((message) => {
//     console.log(message);
// });


// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// }

// delay(2000).then(() => {
//     console.log("2 секунды прошло");
// });


// new Promise((resolve) => {
//     resolve(5);
// })
//     .then((num) => {
//         return num * 2;
//     })
//     .then((num) => {
//         return num + 1;
//     })
//     .then((result) => {
//         console.log(result);
//     });

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(10), 1000);
//     });
// }

// step1()
//     .then((num) => {
//         return new Promise((resolve) => {
//             setTimeout(() => resolve(num * 3), 1000);
//         });
//     })
//     .then((result) => {
//         console.log(result);
//     });

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((error) => {
//         console.log("Ошибка запроса:", error);
//     });

// Promise.resolve("Готово").then(console.log);
// Promise.reject("Ошибка").catch(console.log);

// Promise.all([
//     Promise.resolve(1),
//     Promise.resolve(2),
//     // Promise.reject('Ошибка'),
//     Promise.resolve(3)
// ]).then((results) => {
//     console.log(results);
//     return 'hi';
// }).catch((err) => {
//     console.log(`Ошибка из all ${err}`);
//     return 'by';
// }).then(console.log);

// Promise.allSettled([
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3),
//     Promise.reject('Ошибка'),
//     new Promise((resolve) => setTimeout(() => resolve("Быстрый"), 500)),
//     new Promise((resolve) => setTimeout(() => resolve("Медленный"), 1000))
// ]).then((results) => {
//     console.log(results);
// }).catch((err) => console.log(`Ошибка из allSettled ${err}`));


// Promise.race([
//     new Promise((resolve) => setTimeout(() => resolve("Быстрый"), 500)),
//     new Promise((resolve) => setTimeout(() => resolve("Медленный"), 1000)),
//     new Promise((_, reject) => setTimeout(() => reject("Error"), 600)),
// ])
//     .then(console.log)
//     .catch((err) => console.log(`Ошибка из race ${err}`));

// Promise.any([
//     new Promise((resolve) => setTimeout(() => resolve("Быстрый"), 500)),
//     new Promise((resolve) => setTimeout(() => resolve("Медленный"), 1000)),
//     new Promise((_, reject) => setTimeout(() => reject("Error"), 400)),
// ])
//     .then(console.log)
//     .catch((err) => console.log(`Ошибка из any ${err}`));

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// async function loadUser() {
//     try {
//         const response = await fetch("./user.json");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// loadUser();

// class Example {
//     sayHi() {
//         throw new Error('Not implemented');
//     }
// }

// const ex = new Example();

// try {
//     ex.sayHi();
// } catch (e) {
//     console.log(e.name);
// }

// console.log('Hello')

// async function showMessage() {
//     console.log('Начинаю...');

//     // Ждем, пока выполнится промис
//     let result = await new Promise(resolve => setTimeout(() => resolve('Готово!'), 2000));

//     console.log(result); // Выведется через 2 секунды
// }

// showMessage();

// try {
//     throw new SyntaxError('hi')
// } catch (e) {
//     console.log({ e })
// }

/** Пример с разницей async\await и Promise */
// async function example() {
//     console.log(1);
//     const promise = await new Promise((resolve) => {
//         setTimeout(() => resolve(2));
//     });
//     console.log(promise);
//     console.log(3);
// }

// function example() {
//     console.log(1);
//     const promise = new Promise((resolve) => {
//         setTimeout(() => resolve(2));
//     });
//     promise.then(console.log);
//     console.log(3);
// }

// console.log(4);
// example();
// console.log(5);

/** Примеры работы timeout и promise */
// function eventLoopTask() {
//     console.log("1");

//     setTimeout(() => {
//         console.log("2");
//     }, 0);

//     Promise.resolve().then(() => console.log("3"));

//     console.log("4");
// }


// function eventLoopTask() {
//     console.log("1");

//     setTimeout(() => {
//         console.log("2");
//         Promise.resolve().then(() => console.log("3"));
//     }, 0);

//     Promise.resolve().then(() => {
//         console.log("4");
//         setTimeout(() => console.log("5"), 0);
//     });

//     setTimeout(() => console.log("6"), 0);

//     Promise.resolve().then(() => console.log("7"));

//     console.log("8");
// }

// function eventLoopTask() {
//     console.log('start');

//     queueMicrotask(() => console.log('queueMicrotask'));
//     Promise.resolve().then(() => console.log("promise 1"));
//     setTimeout(() => console.log('timeout'), 0);
//     Promise.resolve().then(() => console.log("promise 2"));

//     console.log('end');
// }

// function eventLoopTask() {
//     console.log('start');

//     queueMicrotask(() => console.log('queueMicrotask'));
//     Promise.resolve().then(() => {
//         console.log("promise 1");

//         setTimeout(() => {
//             console.log('timeout 1');
//             Promise.resolve().then(console.log('promise 1.1'))
//         }, 0);
//     });

//     Promise.resolve().then(() => {
//         console.log("promise 2");
//         setTimeout(() => console.log('timeout 2'), 0);
//     });
//     Promise.resolve().then(() => console.log("promise 3"));
//     setTimeout(() => console.log('timeout 3'), 0);

//     console.log('end');
// }

let callStack = 0;
function getPromise(result) {
    return new Promise((resolve) => {
        console.log(`loop ${callStack}`);
        callStack++;
        if (callStack > 10) {
            resolve(result);
            return;
        }
        resolve(getPromise(result));
    })
}

// function eventLoopTask() {
//     console.log('start');
//     const promise = new Promise((resolve) => {
//         const arr = [1, 2, 3, 4, 5, 6];
//         let result = 0;

//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i]);
//             result += arr[i];
//         }

//         setTimeout(() => {
//             console.log('timeout');
//             // resolve(result);
//             resolve(getPromise(result));
//         }, 0);
//     });

//     promise.then((v) => {
//         console.log(v, promise);
//     });
//     //console.log(promise);
//     console.log('end');
// }


// console.log('1');
// eventLoopTask();
// console.log('2');

// function eventLoopTask() {
//     const promise = Promise.resolve('3');
//     setTimeout(() => {
//         console.log('4');
//         Promise.resolve('5').then(console.log);
//     });
//     setTimeout(() => {
//         console.log('6');
//     });
//     promise.then(console.log);
// }