class User {
    username = 'Mock-name';
    firstName;
    lastName;
    isOnline = false;

    constructor(username = '', fullName, isOnline) {
        this.username = username;
        this.isOnline = isOnline;
        this.fullName = fullName;
    }

    updateOnline(online) {
        this.isOnline = online;
    }

    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }


    static checkOnline(user) {
        console.log(`Online status: ${user.isOnline}`)
    }

    // static [Symbol.hasInstance](obj) {
    //     return false
    // }
}

// function MyExampleUserFn(name, age) {
//     return {
//         name,
//         age
//     }
// }

// const exampleUserWithFn = new MyExampleUserFn('Mike', 17);
// console.log(exampleUserWithFn);
// console.log(typeof MyExampleUserFn);
// console.log(typeof User);

const myUser = new User('Anna', 'Anna Finozhenko', false);

// User.checkOnline(myUser)
// console.log(myUser.fullName)
// User.checkOnline(myUser);

class Admin extends User {
    constructor(username = '', fullName, isOnline, role = 'admin') {
        super(username, fullName, isOnline);
        this.role = role;
    }
}

const admin = new Admin('admin', 'admin admin', true);
// console.log(admin instanceof Object);
// console.log(admin instanceof User);
// console.log(admin);

User.prototype.someValue = 1;
// console.log(admin);
// console.log(admin.someValue);
// console.log(new User('test', 'test test', false).someValue);

const exampleProduct = {
    name: 'Name',
    price: 1000
}

const newProduct = Object.create(exampleProduct);
exampleProduct.createDate = new Date();
// console.log(newProduct.createDate, exampleProduct.createDate);