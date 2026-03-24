/** Array */

// console.log(roles.at(2));
// console.log(roles[2]);

// roles.push('New with push');
// roles.unshift('New with unshift');

// // console.log({ roles, len: roles.length });

// roles.pop();
// roles.shift();
// console.log({ roles, len: roles.length });


// const result = products.filter((value) => value.price > 20_000);

// const result = products.find((value, index, array) => {
//     console.log({ index, array })
//     return value.price > 20_000;
// });

const roles = ['Admin', 'Manager', 'User', 'Test', 'Developer'];
// const currentUser = {
//     username: 'Example username',
//     role: 'User-1',
// }
// const result = roles.includes(currentUser.role);


// const newProduct = { id: 9, name: 'Клавиатура 2', price: 4_000 };
// products.push(newProduct);
// const result = products.includes(newProduct);

// const result = products.map((value) => {
//     return {
//         ...value,
//         description: 'Hello'
//     }
// })
// const result = products.map((value) => {
//     return value.name;
// })

// const result = products.some((value) => value.id === 10);

// const result = products.every((value) => value.id === 1);

// const result = products.every((value) => value.name.length > 3);

// const result = products.findIndex((value) => value.price >= 70_000);
// console.log(result, products[result]);

// const result = roles.indexOf('User');
// console.log(result, roles[result]);

// const result = ['New role 1', 'New role 2'].concat(roles);
// const result = roles.join(', ');

// const result = products.slice(1, 4);
// const result = products.splice(1, 3, { id: 10, name: 'Name', price: 0 });


// const result = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9, [10, 11, 12]]
// ].flat(2);

// const result = [1, 2, 3].flatMap((value) => [null, null, null].fill(value * 2));
// const result = [1, 2, 3].map((value) => [null, null, null].fill(value * 2));


// products.reverse();
const products = [
    { id: 1, name: 'Телефон', price: 30_000 },
    { id: 2, name: 'Монитор', price: 20_000 },
    { id: 3, name: 'Ноутбук', price: 70_000 },
    { id: 4, name: 'Процессор', price: 70_000 },
    { id: 5, name: 'Видеокарта', price: 100_000 },
    { id: 6, name: 'Корпус', price: 3_000 },
    { id: 7, name: 'Мышка', price: 2_000 },
    { id: 8, name: 'Клавиатура', price: 3_000 },
];

// const result = products.reduce(
//     (prevValue, currentValue) => prevValue + currentValue.price, 0
// );

// const result = products.sort((a, b) => a.name[0] - b.name[0]);
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }
// products.forEach((value) => {
//     console.log(value);
// })

// const result = products.with(2, { id: 10, name: 'test', price: 0 });

// console.log(result, products);

const exampleMap = new Map([
    ['key', 'value'],
]);

exampleMap.set(1, 'Test');
exampleMap.set(2, 'Test 2');
exampleMap.set(1, 'Test 3');

if (exampleMap.has(2)) {
    //console.log(exampleMap.get(2))
} else {
    exampleMap.set(2, 't');
}

// exampleMap.delete(2);
// exampleMap.set(products[0], true);
// console.log(exampleMap.get(products[0]))

// exampleMap.clear();
//exampleMap.size;
// console.log(exampleMap.keys());
// console.log(Array.from(exampleMap.keys()).filter(v => v === 'key'))
// console.log(exampleMap.values());
// console.log(exampleMap.entries().toArray());

// console.log({ exampleMap })

// for (let entry of exampleMap) {
//     console.log(entry)
// }

// exampleMap.forEach((value) => console.log(value));
// console.log(Array.from(exampleMap.values()));

const exampleSet = new Set();

// exampleSet.add(products[0]);

// console.log(Array.from(exampleSet.keys()))

// const someDate = new Date('12.12.2025');
const someDate = new Date('2026-02-23 16:05:40');
const someDate_1 = new Date('2026-02-21 16:05:40');

// console.log(someDate);

const test = JSON.stringify({
    2: 1,
    b: 2,
    c: {
        a: 1
    }
})