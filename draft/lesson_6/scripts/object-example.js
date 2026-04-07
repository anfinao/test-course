const user = {
    firstName: 'Иван',
    lastName: 'Иванов',
    surname: 'Иванович',
    // getName: () => {
    //     return `${this.firstName}` // будет ошибка
    // },
    getName() {
        return `${this.firstName}`
    },
    // testFn: () => { console.log({ this: this }); }, // теряет this при вызове
    testFn() {
        return () => console.log({ this: this }); // замыкается на this функции
    },
    // testFn() {
    //     setTimeout(() => {
    //         console.log({ this: this }); // замыкается на this функции
    //     });
    // },

    // testFn() {
    //     [1, 2, 3].forEach(function () {
    //         console.log(this) // undefined
    //     });
    //     setTimeout(function () {
    //         console.log({ this: this }); // смотрит на window - особенность setTimeout
    //     });
    // },
}

// console.log(user.getName());
console.log(user.testFn()());
/** Методы в объекте */
// user.getName = function () {
//     return `${this.firstName}`
// }
// user.getName = () => {
//     return `${this.firstName}`
// }

//console.log(user.getName());
// console.log(user.testFn());

/** this изменился на undefined */
// const getName = user.getName;
// console.log(getName());

const productCart = {
    productCount: 0,
};

const product = new Object({ title: 'Product title' });

// console.log({
//     productCart,
//     product
// });

function getObjectProps(obj) {
    for (let key in obj) {
        console.log(key);
    }
}
// console.log('Просмотр свойств:')
// getObjectProps(user);

// const newUser = Object.create(user);
// //newUser.__proto__ = user;
// console.log(Object.getPrototypeOf(newUser))
// console.log(newUser);


/** Создание через create */
// console.log(Object.create(null));
// console.log(Object.create({}));
const extendsUser = Object.create(user);
//user.firstName = 'Hello!!';
extendsUser.firstName = 'Hello!!';
//console.log({ extendsUser, extendsUserName: extendsUser.getName(), userName: user.getName() });


/** Копирование */
user.cart = productCart;
productCart.products = [];
// const copyUser = Object.assign({}, user, { someValue: 1 }); // остаются ссылки на внутрение свойства-объекты
// const copyUser = { ...user, ...{ someValue: 1 } }; // остаются ссылки на внутрение свойства-объекты

const copyUser = JSON.parse(JSON.stringify(user)); // функция не скопируется
// const copyUser = structuredClone(user); // ошибка при копировании функции

productCart.products.push('1');

// console.log({ copyUser, user });

/** Значение this определяется во время исполнения кода */
const admin = {
    firstName: 'Admin',
    fnWithArgs(helloStr) {
        console.log(`${helloStr}, ${this.firstName}`)
    }
}
admin.getName = user.getName;
// console.log(admin.getName());
// admin.fnWithArgs('admin')
admin.fnWithArgs.apply(user, ['hello'])
admin.fnWithArgs.call(user, 'Привет')
// admin.fnWithArgs.bind(user)()

const { firstName, lastName } = user;

const { firstName: otherFirstName } = admin;

// Object.defineProperty(admin, 'role', {
//     value: 'admin',
//     writable: true,
//     enumerable: true,
//     configurable: false
// });

/** enumerable */
// console.log(Object.keys(admin));
// console.log('role' in admin);
// console.log({ admin });

/** writable */
// admin.role = 'user';
// console.log({ admin });

/** configurable */
// Object.defineProperty(admin, 'role', { value: 1 })
// delete admin.role;
// console.log(Object.getOwnPropertyDescriptor(admin, 'role'))