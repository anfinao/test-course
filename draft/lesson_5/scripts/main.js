function logMessage(message) {
    console.log(message);
}

// document.getElementById('test').innerHTML = 'Загружено!';
// logMessage('main.js executed!');

/** Объявление переменных */
// console.log(a);

// var a = 1;
// var a = 2;
// console.log(a);

let b = 1;
// let b = 2;
// console.log(b);

// console.log(c);
// var c = 1;

// console.log(d);
// function test() {
//     console.log(d);
//     if (true) {
//         var d = 1;
//         let e = 5;
//         console.log(e);
//     }

//     console.log(e)
// }
// test();

function example(a, b, c, d) {
    console.log({ a, b, c, d });
}

const arr = [1, 2, 3];
example('1', ...arr);

function helloStr(helloStr) {
    const count = 0;
    return (name) => {
        console.log(`${helloStr}, ${name}`);
        console.log(count);
    }
}

const hello = helloStr('Hello');
hello('Ivan');
hello('Andrew');
