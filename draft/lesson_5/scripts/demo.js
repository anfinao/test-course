console.log(x); // undefined (hoisting!)
var x = 5;

function testHoisting() {
    console.log(y); // undefined
    if (true) {
        var y = 10;
    }
    console.log(y); // 10
}
// testHoisting();
// console.log(y);

var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log(i); // Всегда 3!
    };
}

// console.log(i)
// funcs[0](); // 3
// funcs[1](); // 3
// funcs[2](); // 3


/** Вложенные функции */
function multiplying(x) {
    return function (y) {
        return x * y;
    }
}

const result = multiplying(2)(2);
console.log({ result }); // { result: 4 }

const exampleMulty = multiplying(5);
console.log(exampleMulty(4)); // 20
console.log(exampleMulty(5)); // 25

function getCatalogState() {
    let state = {
        title: 'Каталог',
        productCount: 0,
        productList: []
    };

    function addProduct(productName) {
        if (!productName) {
            return;
        }

        state.productList.push(productName);
        state.productCount = state.productList.length;
    };

    return {
        addProduct,
        state
    }
}
const catalogState = getCatalogState();
catalogState.addProduct('Яблоко');
catalogState.addProduct('Апельсин');
catalogState.addProduct('Молоко');
console.log(catalogState.state);

