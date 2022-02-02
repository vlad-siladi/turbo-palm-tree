// N1
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child =Object.create(parent) ;

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// N2
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor)
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create( parent)
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// N3
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// const bmv = new Car('BMW', 'X5', 58900);
// const audi = new Car('Audi', 'Q3', 36000);
// console.log(bmv);
// console.log(audi);

// N4
// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// const bmv = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// console.log(bmv)

// N5
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(audi.getPrice());
// audi.changePrice(35000);
// console.log(audi.getPrice());

// N6
// function Storage(items) {
//   this.items = items;
//   };
// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//     this.items.splice(1,1);
// };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// N7

// function StringBuilder(baseValue){
  
//   this.value = baseValue;
//   };
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };
// // console.log(StringBuilder.prototype.hasOwnProperty('getValue'))

// StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//     this.value += str;
// };

// StringBuilder.prototype.padBoth = function (str) {
//     this.value = str + this.value + str;
// };



// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// N8
// class Car {}

// N9
// class Car {
//    brand;
//   model;
//    price;


// constructor({ brand, model, price }){
// this.brand = brand;
//   this.model = model;
//   this.price = price;

// }
// }

    // или

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }


// N10
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice()  {
//   return this.price;
//   }

//   changePrice(newPrice) {
//   this.price = newPrice;
//   }
// }

// N11
// class Car {#brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   getBrand(){
//   return this.#brand;
//   }
  
//   changeBrand(newBrand){
//   this.#brand = newBrand;
//   }
  
// }

// N12
// class Storage {
//     #items
//     constructor(items){
//   this.#items = items;
// }

// getItems() {
//   return this.#items;
// }

// addItem(newItem) {
//   return this.#items.push(newItem);
// }

// removeItem (item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// }
// };

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// N13
// class StringBuilder {
//  #value
//   constructor(value){
//     this.#value = value;
  
// }

// getValue () {
//   return this.#value;
// };

// padEnd (str) {
//   this.#value += str;
// };

// padStart (str) {
//   this.#value = str + this.#value;
// };

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// N14
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// N15
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(Car.MAX_PRICE<=newPrice){
//     return
//     }
//       this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// N16
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
// static checkPrice(price){
// if(price<=Car.#MAX_PRICE){
// return `Всё хорошо, цена в порядке.`
// }
//   else return  `Внимание! Цена превышает допустимую.`
// }

// // или
// static checkPrice(price){
// if(price<=this.#MAX_PRICE){
// return `Всё хорошо, цена в порядке.`
// }
//    return  `Внимание! Цена превышает допустимую.`
// }

// // или
// static checkPrice(price){
// if(price>this.#MAX_PRICE){
//   return  `Внимание! Цена превышает допустимую.`

// }
//    return `Всё хорошо, цена в порядке.`
// }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// N17

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
//   static AccessLevel ={ BASIC: 'basic', SUPERUSER: 'superuser' }
// }

// N18

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки

//   static accessLevel = {}

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   constructor({email,accessLevel}) {
//   super(email)
//     this.accessLevel = accessLevel;
//   }
  
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// N19
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
  
//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
  
//   blacklist(email){
//    return this.blacklistedEmails.push(email);
//    }
  
//   isBlacklisted(email){
//    return this.blacklistedEmails.includes(email)
  
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 